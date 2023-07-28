import 'package:av_app/pages/EventPage.dart';
import 'package:av_app/services/DataService.dart';
import 'package:av_app/widgets/ProgramTabView.dart';
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
    DataService.updateEvents(_events).whenComplete(() async => await loadEventParticipants());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Program AV 2023'),
      ),
      body: Center(child: ProgramTabView(events: _events, onEventPressed: eventPressed))
    );
  }

  final List<EventModel> _events = [];

  Future<void> loadEventParticipants() async {
      for (var e in _events)
      {
        if(EventModel.canSignIn(e))
        {
          var participants = await DataService.getParticipantsPerEventCount(e.id!);
          var isSignedCurrent = await DataService.isCurrentUserSignedToEvent(e.id!);
          setState(() {
            e.currentParticipants = participants;
            e.isSignedIn = isSignedCurrent;
          });
        }
      }
  }

  eventPressed(int id) {
    Navigator.pushNamed(
        context, EventPage.ROUTE, arguments: id).then((value) => loadEventParticipants());
  }
}