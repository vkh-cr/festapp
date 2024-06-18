import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/data/OfflineDataHelper.dart';
import 'package:fstapp/pages/EventPage.dart';
import 'package:fstapp/services/ScheduleTimelineHelper.dart';
import 'package:fstapp/widgets/ScheduleTimeline.dart';

import '../models/EventModel.dart';
import '../styles/Styles.dart';

class MySchedulePage extends StatefulWidget {
  static const ROUTE = "myschedule";

  const MySchedulePage({Key? key}) : super(key: key);

  @override
  _MySchedulePageState createState() => _MySchedulePageState();
}

class _MySchedulePageState extends State<MySchedulePage> {
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  Future<void> loadData() async {
    loadDataOffline();

    await DataService.updateEvents(_events, true).whenComplete(() async {
      _dots.clear();
      _dots.addAll(_events.map((e) => TimeLineItem.fromEventModelAsChild(e)));
      await loadEventParticipants();
      await DataService.synchronizeMySchedule();
    });
    setState(() {});
  }

  void loadDataOffline() {
    var offlineEvents = OfflineDataHelper.getAllEvents();
    OfflineDataHelper.updateEventsWithMySchedule(offlineEvents);
    OfflineDataHelper.updateEventsWithGroupName(offlineEvents);
    var userInfo = OfflineDataHelper.getUserInfo();

    var myEvents = offlineEvents.where((e) =>
        e.isEventInMySchedule == true ||
        (e.isGroupEvent && (userInfo?.hasGroup() ?? false)) ||
        e.isSignedIn);

    _events.clear();
    _events.addAll(myEvents);

    _dots.clear();
    _dots.addAll(_events.map((e) => TimeLineItem.fromEventModelAsChild(e)));
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("My schedule").tr(),
          leading: BackButton(
            onPressed: () => RouterService.goBackOrHome(context),
          ),
        ),
        body: Align(
            alignment: Alignment.topCenter,
            child: ConstrainedBox(
                constraints: BoxConstraints(maxWidth: appMaxWidth),
                child: SingleChildScrollView(
                    child: ScheduleTimeline(
                  eventGroups: ScheduleTimelineHelper.splitEventsByDay(_dots, context),
                  onEventPressed: _eventPressed,
                  nodePosition: 0.3,
                  emptyContent: Center(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(24, 88, 24, 24),
                      child: AppConfig.isOwnProgramSupported
                          ? Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text(
                                  "Create your own schedule with button".tr(),
                                  style: const TextStyle(fontSize: 18),
                                  textAlign: TextAlign.center,
                                ),
                                const SizedBox.square(dimension: 12),
                                const Icon(Icons.add_circle_outline),
                              ],
                            )
                          : const Text(
                              "There will appear your events.",
                              style: TextStyle(fontSize: 20),
                            ).tr(),
                    ),
                  ),
                )))));
  }

  final List<EventModel> _events = [];
  final List<TimeLineItem> _dots = [];

  Future<void> loadEventParticipants() async {
    await DataService.loadEventsParticipantsAndStatus(_events);
    for (var e in _events) {
      var dot = _dots.singleWhere((element) => element.id == e.id!);
      setState(() {
        dot.rightText = e.toString();
        dot.leftText = e.durationTimeString();
        dot.dotType = TimeLineItem.getIndicatorFromEvent(e);
      });
    }
  }

  _eventPressed(int id) {
    RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id")
        .then((value) => loadData());
  }
}
