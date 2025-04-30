import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/timeline/schedule_timeline_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:timelines_plus/timelines_plus.dart';

class ScheduleTimeline extends StatefulWidget {
  final Function(int)? onEventPressed;
  final List<TimeBlockGroup> eventGroups;
  final double? nodePosition;
  final Widget? emptyContent;
  final Function(BuildContext, List<TimeBlockGroup>, TimeBlockItem? parentEventId)? onAddNewEvent;
  final bool Function()? showAddNewEventButton;
  final TimeBlockItem? parentEvent;

  const ScheduleTimeline({
    super.key,
    required this.eventGroups,
    this.onEventPressed,
    this.nodePosition = 0.24,
    this.emptyContent,
    this.onAddNewEvent,
    this.showAddNewEventButton,
    this.parentEvent
  });

  @override
  _ScheduleTimelineState createState() => _ScheduleTimelineState();
}

class _ScheduleTimelineState extends State<ScheduleTimeline> {
  @override
  Widget build(BuildContext context) {
    if (widget.eventGroups.isEmpty && widget.emptyContent != null) {
      return widget.emptyContent!;
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
              StylesConfig.formatTimelineSplit(group.title),
              style: StylesConfig.timeLineSplitTextStyle(context),
            ),
          ),
        ),
      );
      children.add(createTimeline(timeLineItems));
    }

    if (widget.showAddNewEventButton?.call() ?? false) {
      children.add(
        Center(
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 28.0),
            child: TextButton.icon(
              onPressed: () {
                widget.onAddNewEvent?.call(context, widget.eventGroups, widget.parentEvent);
              },
              icon: const Icon(
                Icons.add_circle_outline,
                size: 24,
              ),
              label: const Text("Add To Schedule").tr(),
              style: TextButton.styleFrom(
                foregroundColor: ThemeConfig.timelineAddNewEventColor(context),
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
              ),
            ),
          ),
        ),
      );
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
        indicatorTheme: IndicatorTheme.of(context).copyWith(
          color: ThemeConfig.timelineColor(context),
        ),
        connectorTheme: ConnectorTheme.of(context).copyWith(
          color: ThemeConfig.timelineColor(context),
          thickness: 2,
        ),
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
              style: StylesConfig.timeLineSmallTextStyle.copyWith(
                color: ThemeConfig.timelineTextColor(context),
              ),
            ),
          );
        },
        contentsBuilder: (_, index) {
          final event = events[index];
          return TextButton(
            onPressed: () => widget.onEventPressed?.call(event.id),
            style: TextButton.styleFrom(
              foregroundColor: ThemeConfig.timelineTextColor(context),
              alignment: Alignment.centerLeft,
            ),
            child: Text(
              StylesConfig.formatTimelineRightText(event.data["rightText"]),
              style: StylesConfig.timeLineSmallTextStyle,
            ),
          );
        },
        indicatorBuilder: (_, index) {
          final event = events[index];
          if (event.timeBlockType == TimeBlockType.signedIn) {
            return OutlinedDotIndicator(
              color: ThemeConfig.timelineColor(context),
              borderWidth: 6,
            );
          } else if (event.timeBlockType == TimeBlockType.canSignIn) {
            return OutlinedDotIndicator(
              color: ThemeConfig.timelineColor(context),
              borderWidth: 2,
            );
          } else {
            return Padding(
              padding: EdgeInsetsDirectional.symmetric(horizontal: 3.5),
              child: DotIndicator(
                color: ThemeConfig.timelineColor(context),
                size: 8,
              ),
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
