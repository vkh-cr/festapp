import 'package:flutter/material.dart';
import 'package:timelines/timelines.dart';

import '../models/EventModel.dart';
import '../styles/Styles.dart';

class ProgramTimeline extends StatefulWidget {
  Function(int)? onEventPressed;

  List<EventModel> events = [];

  ProgramTimeline({super.key, required this.events, this.onEventPressed});

  @override
  _ProgramTimelineState createState() =>
      _ProgramTimelineState(events, onEventPressed);
}

class _ProgramTimelineState extends State<ProgramTimeline> {
  final List<EventModel> allEvents;
  Function(int)? onEventPressed;

  _ProgramTimelineState(this.allEvents, this.onEventPressed);

  @override
  Widget build(BuildContext context) {
    var morningEvents = allEvents.where((e) => e.startTime.hour <= 12).toList();
    var afternoonEvents = allEvents
        .where((e) => e.startTime.hour > 12 && e.startTime.hour <= 18)
        .toList();
    var eveningEvents = allEvents.where((e) => e.startTime.hour > 18).toList();
    return SingleChildScrollView(
        child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        createTimeline(morningEvents),
        afternoonEvents.isNotEmpty
            ? const Padding(
                padding: EdgeInsets.fromLTRB(48, 18, 0, 12),
                child: Text(
                  "Odpoledne",
                  style: TextStyle(color: primaryBlue1, fontWeight: FontWeight.bold),
                ),
              )
            : const SizedBox.shrink(),
        createTimeline(afternoonEvents),
        eveningEvents.isNotEmpty
            ? const Padding(
                padding: EdgeInsets.fromLTRB(48, 18, 0, 12),
                child: Text(
                  "Večer",
                  style: TextStyle(color: primaryBlue1, fontWeight: FontWeight.bold),
                ),
              )
            : const SizedBox.shrink(),
        createTimeline(eveningEvents),
      ],
    ));
  }

  Timeline createTimeline(List<EventModel> events) {
    return Timeline.tileBuilder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      theme: TimelineTheme.of(context).copyWith(
        nodePosition: 0.24,
        indicatorTheme:
            IndicatorTheme.of(context).copyWith(color: primaryBlue1),
        connectorTheme: ConnectorTheme.of(context)
            .copyWith(color: primaryBlue1, thickness: 2),
      ),
      builder: TimelineTileBuilder.connected(
        itemCount: events.length,
        contentsAlign: ContentsAlign.basic,
        oppositeContentsBuilder: (_, index) {
          final event = events[index];
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(event.startTimeString()),
          );
        },
        contentsBuilder: (_, index) {
          final event = events[index];
          //return Text(event.maxParticipants == null ? event.title : "${event.title} (${event.currentParticipants}/${event.maxParticipants})");
          return TextButton(
              onPressed: () => onEventPressed!(event.id!),
              style: TextButton.styleFrom(
                foregroundColor: Colors.black,
                alignment: Alignment.centerLeft// Text Color
              ),
              child: Text(event.toString(),));
        },
        indicatorBuilder: (_, index) {
          final event = events[index];
          return EventModel.canSignIn(event)
              ? OutlinedDotIndicator(
                  color: primaryBlue1, borderWidth: event.isSignedIn ? 6 : 2)
              : const Padding(
                  padding: EdgeInsetsDirectional.symmetric(horizontal: 3.5),
                  child: DotIndicator(color: primaryBlue1, size: 8));
        },
        connectorBuilder: (_, index, __) {
          return const SolidLineConnector();
        },
      ),
    );
  }
}
