import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:flutter/material.dart';
import 'package:timelines/timelines.dart';
import 'package:fstapp/appConfig.dart';


class ScheduleTimeline extends StatefulWidget {
  final Function(int)? onEventPressed;
  final List<TimeBlockGroup> eventGroups;
  final double? nodePosition;
  final Widget? emptyContent;

  const ScheduleTimeline({
    super.key,
    required this.eventGroups,
    this.onEventPressed,
    this.nodePosition = 0.24,
    this.emptyContent,
  });

  @override
  _ScheduleTimelineState createState() => _ScheduleTimelineState();
}

class _ScheduleTimelineState extends State<ScheduleTimeline> {
  @override
  Widget build(BuildContext context) {
    if (widget.eventGroups.isEmpty) {
      return widget.emptyContent ?? const SizedBox.shrink();
    }

    List<Widget> children = [];
    for (var group in widget.eventGroups) {
      var timeLineItems = group.events.toList();
      children.add(
        Visibility(
          visible: group.title.isNotEmpty,
          child: Padding(
            padding: const EdgeInsets.fromLTRB(36, 18, 0, 12),
            child: Text(
              group.title,
              style: timeLineSplitTextStyle,
            ),
          ),
        ),
      );
      children.add(createTimeline(timeLineItems));
    }

    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: children,
      ),
    );
  }

  Timeline createTimeline(List<TimeBlockItem> events) {
    return Timeline.tileBuilder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      theme: TimelineTheme.of(context).copyWith(
        nodePosition: widget.nodePosition,
        indicatorTheme: IndicatorTheme.of(context).copyWith(color: AppConfig.timelineColor),
        connectorTheme: ConnectorTheme.of(context).copyWith(color: AppConfig.timelineColor, thickness: 2),
      ),
      builder: TimelineTileBuilder.connected(
        itemCount: events.length,
        contentsAlign: ContentsAlign.basic,
        oppositeContentsBuilder: (_, index) {
          final event = events[index];
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              event.data["leftText"],
              style: timeLineSmallTextStyle,
            ),
          );
        },
        contentsBuilder: (_, index) {
          final event = events[index];
          return TextButton(
            onPressed: () => widget.onEventPressed!(event.id),
            style: TextButton.styleFrom(
              foregroundColor: AppConfig.timelineTextColor,
              alignment: Alignment.centerLeft,
            ),
            child: Text(
              event.data["rightText"],
              style: timeLineSmallTextStyle,
            ),
          );
        },
        indicatorBuilder: (_, index) {
          final event = events[index];
          if(event.timeBlockType == TimeBlockType.signedIn) {
            return const OutlinedDotIndicator(
              color: AppConfig.timelineColor,
              borderWidth: 6,
            );
          } else if(event.timeBlockType == TimeBlockType.canSignIn) {
            return const OutlinedDotIndicator(
              color: AppConfig.timelineColor,
              borderWidth: 2,
            );
          } else {
            return const Padding(
              padding: EdgeInsetsDirectional.symmetric(horizontal: 3.5),
              child: DotIndicator(color: AppConfig.timelineColor, size: 8),
            );
          }
        },
        connectorBuilder: (_, index, __) {
          return const SolidLineConnector();
        },
      ),
    );
  }
}