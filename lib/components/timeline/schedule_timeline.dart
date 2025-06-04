// schedule_timeline.dart
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/dialogs/detail_dialog.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:timelines_plus/timelines_plus.dart';

class ScheduleTimeline extends StatefulWidget {
  final Function(int)? onEventPressed;
  final List<TimeBlockGroup> eventGroups;
  final double? nodePosition;
  final Widget? emptyContent;
  final Function(BuildContext, List<TimeBlockGroup>, TimeBlockItem? parentEventId)? onAddNewEvent;
  final bool Function()? showAddNewEventButton;
  final TimeBlockItem? parentEvent;
  final bool isGroupTitleShown;

  const ScheduleTimeline({
    super.key,
    required this.eventGroups,
    this.onEventPressed,
    this.nodePosition = 0.24,
    this.emptyContent,
    this.onAddNewEvent,
    this.showAddNewEventButton,
    this.parentEvent,
    this.isGroupTitleShown = true
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
          visible: group.title.isNotEmpty && widget.isGroupTitleShown,
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
          TextStyle eventTitleStyle = StylesConfig.timeLineSmallTextStyle;
          if (event.isCancelled == true) {
            eventTitleStyle = eventTitleStyle.copyWith(
              decoration: TextDecoration.lineThrough,
              color: ThemeConfig.grey600(context),
            );
          }
          return TextButton(
            onPressed: () {
              if (event.isActivity) {
                showDialog(
                  context: context,
                  builder: (BuildContext context) {
                    return DetailDialog(
                      title: "${event.title} ${event.durationTimeString()}",
                      customContentWidget: activityContent(event),
                    );
                  },
                );
              } else {
                widget.onEventPressed?.call(event.id);
              }
            },
            style: TextButton.styleFrom(
              foregroundColor: ThemeConfig.timelineTextColor(context),
              alignment: Alignment.centerLeft,
            ),
            child: Text(
              StylesConfig.formatTimelineRightText(event.data["rightText"]),
              style: eventTitleStyle,
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

  Widget activityContent(TimeBlockItem event) {
      return Column(
        children: [
          if (event.haveChildren())
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 12),
            child: ScheduleTimeline(
              eventGroups: TimeBlockHelper.splitTimeBlockByPlace(event.children!),
              onEventPressed: widget.onEventPressed,
              showAddNewEventButton: () {return ((widget.showAddNewEventButton?.call() ?? false) && !event.isActivity);},
              onAddNewEvent: widget.onAddNewEvent,
              parentEvent: event,
              nodePosition: 0.35,
              isGroupTitleShown: false,
            ),
          ),
          if (!HtmlHelper.isHtmlEmptyOrNull(event.description))
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: HtmlView(html: event.description ?? "", isSelectable: true),
            ),
        ],
      );
  }
}
