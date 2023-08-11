import 'package:av_app/pages/EventPage.dart';
import 'package:av_app/services/DataService.dart';
import 'package:av_app/widgets/ProgramTimeline.dart';
import 'package:flutter/material.dart';

import '../models/EventModel.dart';

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
      body: ProgramTimeline(events: _dots, onEventPressed: eventPressed, splitByDay: true,)
    );
  }

  final List<EventModel> _events = [];
  final List<TimeLineItem> _dots = [];

  Future<void> loadEventParticipants() async {
    for (var e in _events)
    {
      if(EventModel.canSignIn(e))
      {
        var participants = await DataService.getParticipantsPerEventCount(e.id!);
        var isSignedCurrent = DataService.isLoggedIn() ? await DataService.isCurrentUserSignedToEvent(e.id!) : false;
        var dot = _dots.singleWhere((element) => element.id == e.id!);
        setState(() {
          e.currentParticipants = participants;
          dot.rightText = e.toString();
          e.isSignedIn = isSignedCurrent;
          dot.dotType = TimeLineItem.getIndicatorFromEvent(e);
        });
      }
    }
  }

  eventPressed(int id) {
    Navigator.pushNamed(
        context, EventPage.ROUTE, arguments: id).then((value) => loadEventParticipants());
  }
}