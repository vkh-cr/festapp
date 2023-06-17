import 'package:av_app/services/DataService.dart';
import 'package:av_app/styles/Styles.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:intl/intl.dart';
import 'package:timelines/timelines.dart';

class ProgramPage extends StatefulWidget {
  const ProgramPage({Key? key}) : super(key: key);

  @override
  _ProgramPageState createState() => _ProgramPageState();
}

class EventModel {
  String startTime;

  int? maxParticipants;

  int id;
  String currentParticipants = "-";

  EventModel(this.id, this.title, this.startTime, this.isSignedIn, this.maxParticipants);

  String title; // Declare instance variable x, initially null.
  bool isSignedIn = false;
}

class _ProgramPageState extends State<ProgramPage> {
  final List<EventModel> _events = [];
  // https://flutterawesome.com/a-powerful-easy-to-use-timeline-package-for-flutter/

  @override
  void initState() {
    super.initState();
    loadEvents().whenComplete(() => loadEventParticipants());

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Program AV 2023'),
      ),
      body: Timeline.tileBuilder(
        theme: TimelineTheme.of(context).copyWith(
          nodePosition: 0.3,
          indicatorTheme: IndicatorTheme.of(context).copyWith(
            color: primaryBlue1
          ),
          connectorTheme: ConnectorTheme.of(context).copyWith(
            color: primaryBlue1,
          thickness: 2),
        ),
        builder: TimelineTileBuilder.connected(
          itemCount: _events.length,
          contentsAlign: ContentsAlign.basic,
          oppositeContentsBuilder: (_, index) {
            final event = _events[index];
            return Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(event.startTime),
              );
          },
          contentsBuilder: (_, index) {
            final event = _events[index];
            return Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(event.maxParticipants == null ? event.title : "${event.title} (${event.currentParticipants}/${event.maxParticipants})"),
            );
          },
          indicatorBuilder: (_, index) {
            final event = _events[index];
            return OutlinedDotIndicator(color: primaryBlue1, borderWidth: event.isSignedIn ? 6:2);
            },
          connectorBuilder: (_,index,__) {
            if(index == _events.length-1)
              {
                return const TransparentConnector();
              }
            return const SolidLineConnector();
          },
        ),
      ),
    );
  }

  Future<void> loadEventParticipants() async {
      for (var e in _events)  {
        if(e.maxParticipants != null)
        {
          var participants = (await DataService.getParticipantsPerEvent(e.id)).toString();
          setState(() {
            e.currentParticipants = participants;
          });
        }
      }
  }

  Future<void>  loadEvents() async {
    var events = await DataService.getEvents();
    setState(() {
      events.forEach((e) {
        final dateTime = DateTime.parse(e["start_time"]);
        final dateTimeString = DateFormat.Hm().format(dateTime);
        _events.add(EventModel(e["id"], e["title"], dateTimeString, false, e["max_participants"]));
      });
      _events[1].isSignedIn = true;
    });
  }
}