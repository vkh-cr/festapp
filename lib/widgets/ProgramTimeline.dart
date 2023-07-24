  import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:timelines/timelines.dart';

import '../models/EventModel.dart';
import '../styles/Styles.dart';

  class ProgramTimeline extends StatefulWidget {
    Function(int)? onEventPressed;

    List<EventModel> events = [];

   ProgramTimeline({super.key, required this.events, this.onEventPressed});

    @override
    _ProgramTimelineState createState() => _ProgramTimelineState(events, onEventPressed);
  }

  class _ProgramTimelineState extends State<ProgramTimeline> {

    final List<EventModel> events;
    Function(int)? onEventPressed;

  _ProgramTimelineState(this.events, this.onEventPressed);


    @override
    Widget build(BuildContext context) {
      return Timeline.tileBuilder(
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
                onPressed: () => onEventPressed!(event.id),
                style: TextButton.styleFrom(
                  foregroundColor: Colors.black, // Text Color
                ),
                child: Text(event.toString()));
          },
          indicatorBuilder: (_, index) {
            final event = events[index];
            return EventModel.canSignIn(event) ? OutlinedDotIndicator(color: primaryBlue1, borderWidth: event.isSignedIn ? 6:2) : Padding(padding: EdgeInsetsDirectional.symmetric(horizontal: 3.5), child: DotIndicator(color: primaryBlue1, size: 8));
          },
          connectorBuilder: (_,index,__) {
            if(index == events.length-1)
            {
              return const TransparentConnector();
            }
            return const SolidLineConnector();
          },
        ),
      );
    }
  }