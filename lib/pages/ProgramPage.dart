import 'package:avapp/pages/EventPage.dart';
import 'package:avapp/services/DataService.dart';
import 'package:avapp/widgets/ProgramTimeline.dart';
import 'package:flutter/material.dart';

import '../models/EventModel.dart';
import '../styles/Styles.dart';

class ProgramPage extends StatefulWidget {
  const ProgramPage({Key? key}) : super(key: key);

  @override
  _ProgramPageState createState() => _ProgramPageState();
}

class _ProgramPageState extends State<ProgramPage> {

  @override
  void initState() {
    super.initState();
    DataService.updateEvents(_events, true).whenComplete(() async {
      _dots.clear();
      _dots.addAll(_events.map((e) => TimeLineItem.fromEventModel(e)));
      await loadEventParticipants();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Můj program'),
      ),
      body: Align(
      alignment: Alignment.topCenter,
      child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: appMaxWidth),
            child: ProgramTimeline(events: _dots, onEventPressed: eventPressed, splitByDay: true, nodePosition: 0.3))
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

  eventPressed(int id) {
    Navigator.pushNamed(
        context, EventPage.ROUTE, arguments: id).then((value) => loadEventParticipants());
  }
}