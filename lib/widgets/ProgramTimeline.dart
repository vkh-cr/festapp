import 'package:flutter/material.dart';
import 'package:timelines/timelines.dart';

import '../models/EventModel.dart';
import '../styles/Styles.dart';

enum DotType {
  dot, open, closed
}

class TimeLineItem{
  DateTime startTime;
  DotType dotType;
  String leftText;
  String rightText;
  int id;

  TimeLineItem({
    required this.dotType,
    required this.startTime,
    required this.leftText,
    required this.rightText,
    required this.id
  });

  static DotType getIndicatorFromEvent(EventModel model)
  {
    return EventModel.canSignIn(model) == false ? DotType.dot : model.isSignedIn ? DotType.closed : DotType.open;
  }
  factory TimeLineItem.fromEventModel(EventModel model) {
    return TimeLineItem(
    startTime: model.startTime,
    dotType: getIndicatorFromEvent(model),
    id: model.id!,
    leftText: model.startTimeString(),
    rightText: model.toString(),
  );
  }

  factory TimeLineItem.fromEventModelAsChild(EventModel model) {
    return TimeLineItem(
      startTime: model.startTime,
      dotType: getIndicatorFromEvent(model),
      id: model.id!,
      leftText: model.durationTimeString(),
      rightText: model.toString(),
    );
  }

}

class ProgramTimeline extends StatefulWidget {
  Function(int)? onEventPressed;

  List<TimeLineItem> events = [];
  double? nodePosition;

  ProgramTimeline({super.key, required this.events, this.onEventPressed, this.nodePosition = 0.24});

  @override
  _ProgramTimelineState createState() =>
      _ProgramTimelineState(events, onEventPressed, nodePosition);
}

class _ProgramTimelineState extends State<ProgramTimeline> {
  final List<TimeLineItem> allEvents;
  Function(int)? onEventPressed;

  double? nodePosition;

  _ProgramTimelineState(this.allEvents, this.onEventPressed, this.nodePosition);

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

  Timeline createTimeline(List<TimeLineItem> events) {
    return Timeline.tileBuilder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      theme: TimelineTheme.of(context).copyWith(
        nodePosition: nodePosition,
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
            child: Text(event.leftText),
          );
        },
        contentsBuilder: (_, index) {
          final event = events[index];
          //return Text(event.maxParticipants == null ? event.title : "${event.title} (${event.currentParticipants}/${event.maxParticipants})");
          return TextButton(
              onPressed: () => onEventPressed!(event.id),
              style: TextButton.styleFrom(
                foregroundColor: Colors.black,
                alignment: Alignment.centerLeft// Text Color
              ),
              child: Text(event.rightText));
        },
        indicatorBuilder: (_, index) {
          final event = events[index];
          return event.dotType != DotType.dot
              ? OutlinedDotIndicator(
                  color: primaryBlue1, borderWidth: event.dotType == DotType.closed ? 6 : 2)
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
