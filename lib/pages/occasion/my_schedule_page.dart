import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/components/timeline/schedule_timeline_helper.dart';
import 'package:fstapp/components/timeline/schedule_timeline.dart';
import 'package:fstapp/pages/occasion/event_page.dart';

import 'package:fstapp/styles/styles_config.dart';

@RoutePage()
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
    await loadDataOffline();

    await DbEvents.updateEvents(_events, true).whenComplete(() async {
      _dots.clear();
      _dots.addAll(_events.map((e) => TimeBlockItem.fromEventModelAsChild(e)));
      await loadEventParticipants();
      await DbEvents.synchronizeMySchedule();
    });
    setState(() {});
  }

  Future<void> loadDataOffline() async {
    var offlineEvents = await OfflineDataService.getAllEvents();
    await OfflineDataService.updateEventsWithMySchedule(offlineEvents);
    await OfflineDataService.updateEventsWithGroupName(offlineEvents);
    var userInfo = await OfflineDataService.getUserInfo();

    var myEvents = offlineEvents.where((e) =>
        e.isEventInMySchedule == true ||
        (e.isGroupEvent && (userInfo?.hasGroup() ?? false)) ||
        e.isSignedIn);

    _events.clear();
    _events.addAll(myEvents);

    _dots.clear();
    _dots.addAll(_events.map((e) => TimeBlockItem.fromEventModelAsChild(e)));
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("My schedule").tr(),
          leading: BackButton(
            onPressed: () => RouterService.popOrHome(context),
          ),
        ),
        body: Align(
            alignment: Alignment.topCenter,
            child: ConstrainedBox(
                constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
                child: SingleChildScrollView(
                    child: ScheduleTimeline(
                  eventGroups: TimeBlockHelper.splitTimeBlocksByDay(_dots, context),
                  onEventPressed: _eventPressed,
                  nodePosition: 0.3,
                  emptyContent: Center(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(24, 88, 24, 24),
                      child: const Text(
                        "There will appear your events.",
                        style: TextStyle(fontSize: 20),
                      ).tr(),
                    ),
                  ),
                )))));
  }

  final List<EventModel> _events = [];
  final List<TimeBlockItem> _dots = [];

  Future<void> loadEventParticipants() async {
    await DbEvents.loadEventsParticipantsAndStatus(_events);
    for (var e in _events) {
      var dot = _dots.singleWhere((element) => element.id == e.id!);
      setState(() {
        dot.data["rightText"] = e.toString();
        dot.data["leftText"] = e.durationTimeString();
        dot.timeBlockType = TimeBlockHelper.getTimeBlockTypeFromModel(e);
      });
    }
  }

  _eventPressed(int id) {
    RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id")
        .then((value) => loadData());
  }
}
