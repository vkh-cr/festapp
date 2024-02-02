import 'package:avapp/data/OfflineDataHelper.dart';
import 'package:avapp/pages/EventPage.dart';
import 'package:avapp/data/DataService.dart';
import 'package:avapp/services/NavigationHelper.dart';
import 'package:avapp/widgets/ProgramTimeline.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../models/EventModel.dart';
import '../styles/Styles.dart';

class ProgramPage extends StatefulWidget {
  static const ROUTE = "/program";
  const ProgramPage({Key? key}) : super(key: key);

  @override
  _ProgramPageState createState() => _ProgramPageState();
}

class _ProgramPageState extends State<ProgramPage> {

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  Future<void> loadData() async {
    loadDataOffline();

    DataService.updateEvents(_events, true).whenComplete(() async {
      _dots.clear();
      _dots.addAll(_events.map((e) => TimeLineItem.fromEventModelAsChild(e)));
      await loadEventParticipants();
      await DataService.synchronizeMySchedule();
    });
  }

  void loadDataOffline() {
    var offlineEvents = OfflineDataHelper.getAllEvents();
    var mySchedules = OfflineDataHelper.getAllMySchedule();
    for (var e in offlineEvents) {
      if (mySchedules.contains(e.id!)) {
        e.isEventInMyProgram = true;
      }
    }
    var myEvents = offlineEvents.where((e) =>
      e.isEventInMyProgram == true ||
      (e.isGroupEvent && DataService.isLoggedIn()) ||
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
          onPressed: () => NavigationHelper.goBackOrHome(context),
        ),
      ),
      body: Align(
      alignment: Alignment.topCenter,
      child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: appMaxWidth),
            child: SingleChildScrollView(child: ProgramTimeline(events: _dots, onEventPressed: _eventPressed, splitByDay: true, nodePosition: 0.3)))
    ));
  }

  final List<EventModel> _events = [];
  final List<TimeLineItem> _dots = [];

  Future<void> loadEventParticipants() async {
    await DataService.loadEventsParticipantsAndStatus(_events);
    for (var e in _events)
    {
      var dot = _dots.singleWhere((element) => element.id == e.id!);
      setState(() {
        dot.rightText = e.toString();
        dot.leftText = e.durationTimeString();
        dot.dotType = TimeLineItem.getIndicatorFromEvent(e);
      });
    }
  }

  _eventPressed(int id) {
    context.push("${EventPage.ROUTE}/$id").then((value) => loadData());
  }
}