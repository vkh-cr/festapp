import 'package:avapp/services/DataService.dart';
import 'package:avapp/styles/Styles.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:timelines/timelines.dart';
import 'package:avapp/config.dart';

import '../models/EventModel.dart';

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
      if (model.isSignedIn) {
        return DotType.closed;
      }
      else if(model.isGroupEvent && DataService.currentUserGroup() != null)
      {
        return DotType.closed;
      }
      else if(model.currentParticipants != null && model.maxParticipants != null && model.isFull())
      {
        return DotType.dot;
      }
      else if (EventModel.canSignIn(model))
      {
        return DotType.open;
      }
      return DotType.dot;
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

  bool? splitByDay;

  ProgramTimeline({super.key, required this.events, this.onEventPressed, this.nodePosition = 0.24, this.splitByDay = false});

  @override
  _ProgramTimelineState createState() =>
      _ProgramTimelineState(events, onEventPressed, nodePosition, splitByDay);
}

class _ProgramTimelineState extends State<ProgramTimeline> {
  final List<TimeLineItem> allEvents;
  Function(int)? onEventPressed;

  double? nodePosition;
  bool? splitByDay;

  _ProgramTimelineState(this.allEvents, this.onEventPressed, this.nodePosition, this.splitByDay);

  @override
  Widget build(BuildContext context) {
    if(splitByDay!) {
      var groupByDay = allEvents.groupListsBy((element) =>
          buildDayFormat(element));
      List<Widget> children = [];
      for (var group in groupByDay.entries) {
        children.add(
            Padding(
              padding: const EdgeInsets.fromLTRB(36, 18, 0, 12),
              child: Text(
                group.key,
                style: timeLineSplitTextStyle,
              ),));
        children.add(createTimeline(group.value));
      }

      if (children.isEmpty)
      {
        children.add(const Center(
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
                "Zde se zobrazí Tvoje přihlášené události.",
                style: TextStyle(fontSize: 20),),
          ),
        ));
      }
      return SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: children,
          ));
    }

    var morningEvents = allEvents.where((e) => e.startTime.hour <= 12).toList();
    var afternoonEvents = allEvents
        .where((e) => e.startTime.hour > 12 && e.startTime.hour < 18)
        .toList();
    var eveningEvents = allEvents.where((e) => e.startTime.hour >= 18).toList();
    return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
    createTimeline(morningEvents),
    afternoonEvents.isNotEmpty
        ? Padding(
            padding: const EdgeInsets.fromLTRB(48, 18, 0, 12),
            child: Text(
              "Odpoledne",
              style: timeLineSplitTextStyle,
            ),
          )
        : const SizedBox.shrink(),
    createTimeline(afternoonEvents),
    eveningEvents.isNotEmpty
        ? Padding(
            padding: const EdgeInsets.fromLTRB(48, 18, 0, 12),
            child: Text(
              "Večer",
              style: timeLineSplitTextStyle,
            ),
          )
        : const SizedBox.shrink(),
    createTimeline(eveningEvents),
          ],
        );
  }

  String buildDayFormat(TimeLineItem element) {
    var result = DateFormat("EEEE d. MMMM ", "cs").format(element.startTime);
    result = result[0].toUpperCase() + result.substring(1);
    return result;
  }

  Timeline createTimeline(List<TimeLineItem> events) {
    return Timeline.tileBuilder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      theme: TimelineTheme.of(context).copyWith(
        nodePosition: nodePosition,
        indicatorTheme:
            IndicatorTheme.of(context).copyWith(color: config.color1),
        connectorTheme: ConnectorTheme.of(context)
            .copyWith(color: config.color1, thickness: 2),
      ),
      builder: TimelineTileBuilder.connected(
        itemCount: events.length,
        contentsAlign: ContentsAlign.basic,
        oppositeContentsBuilder: (_, index) {
          final event = events[index];
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(event.leftText, style: timeLineSmallTextStyle,),
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
              child: Text(event.rightText, style: timeLineSmallTextStyle,));
        },
        indicatorBuilder: (_, index) {
          final event = events[index];
          return event.dotType != DotType.dot
              ? OutlinedDotIndicator(
                  color: config.color1, borderWidth: event.dotType == DotType.closed ? 6 : 2)
              : const Padding(
                  padding: EdgeInsetsDirectional.symmetric(horizontal: 3.5),
                  child: DotIndicator(color: config.color1, size: 8));
        },
        connectorBuilder: (_, index, __) {
          return const SolidLineConnector();
        },
      ),
    );
  }
}
