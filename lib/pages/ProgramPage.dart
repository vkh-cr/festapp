import 'package:av_app/pages/EventPage.dart';
import 'package:av_app/services/DataService.dart';
import 'package:flutter/material.dart';

import '../models/EventModel.dart';
import '../widgets/ProgramTimeline.dart';

class ProgramPage extends StatefulWidget {
  const ProgramPage({Key? key}) : super(key: key);

  @override
  _ProgramPageState createState() => _ProgramPageState();
}

class _ProgramPageState extends State<ProgramPage> {
  final List<EventModel> _events = [];
  @override
  void initState() {
    super.initState();
    loadEvents().whenComplete(() async => await loadEventParticipants());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Program AV 2023'),
      ),
      body: ProgramTimeline(events: _events, onEventPressed: eventPressed),
    );
  }

  Future<void> loadEventParticipants() async {
      for (var e in _events)
      {
        if(e.canSignIn())
        {
          var participants = await DataService.getParticipantsPerEventCount(e.id);
          var isSignedCurrent = await DataService.isCurrentUserSignedToEvent(e.id);
          setState(() {
            e.currentParticipants = participants;
            e.isSignedIn = isSignedCurrent;
          });
        }
      }
  }

  Future<void>  loadEvents() async {
    var events = await DataService.getEvents();
    setState(() {
      events.forEach((e) {
        _events.add(EventModel.fromJson(e["id"], e));
      });
    });
  }

  eventPressed(int id) {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => EventPage(eventId: id))).then((value) => loadEventParticipants());
  }
}