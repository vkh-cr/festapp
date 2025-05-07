import 'package:flutter/material.dart';
import 'package:fstapp/components/timeline/schedule_timeline_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:intl/intl.dart';

import 'timetable_controller.dart';

class TimetableEventWidget extends StatefulWidget {
  final TimeBlockItem item;
  final TimetableController controller;
  final Future<void> Function(TimeBlockItem)? addToMyProgram;
  final Future<void> Function(TimeBlockItem)? removeFromMyProgram;

  const TimetableEventWidget({super.key,
    required this.item,
    required this.controller,
    this.addToMyProgram,
    this.removeFromMyProgram,
  });

  @override
  _TimetableEventWidgetState createState() => _TimetableEventWidgetState();
}

class _TimetableEventWidgetState extends State<TimetableEventWidget> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        widget.controller.onItemTap?.call(widget.item.id);
        setState(() {});
      },
      child: Container(
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.onSurface,
          borderRadius: BorderRadius.circular(6),
        ),
        child: Container(
          width: widget.controller.isTimeHorizontal ?
            widget.controller.timeRangeLength(widget.item.startTime, widget.item.endTime) - widget.controller.minimalPadding() * 2:
            widget.controller.itemStaticDimension() - widget.controller.minimalPadding() * 2,
          height:
            widget.controller.isTimeHorizontal ?
            widget.controller.itemStaticDimension() :
            widget.controller.timeRangeLength(widget.item.startTime, widget.item.endTime) - widget.controller.minimalPadding() * 2,
          decoration: BoxDecoration(
            color: (widget.item.timeBlockType == TimeBlockType.saved || widget.item.timeBlockType == TimeBlockType.signedIn)
                ? ThemeConfig.timetableSelectedColor(context, ThemeConfig.eventTypeToColorTimetable(context, widget.item.eventType))
                : ThemeConfig.timetableUnselectedColor(context, ThemeConfig.eventTypeToColorTimetable(context, widget.item.eventType)),
            borderRadius: BorderRadius.circular(6),
          ),
          child: widget.controller.isTimeHorizontal ? getTimeHorizontalVersion() : getTimeVerticalVersion(),
        ),
      ),
    );
  }

  Stack getTimeHorizontalVersion() {
    return Stack(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: ButtonsHelper.getAddToMyProgramButton(
              TimeBlockHelper.getTimetableItemTypeAsCanSignIn(widget.item.timeBlockType), () async {
            if (widget.addToMyProgram != null) {
              await widget.addToMyProgram!(widget.item);
              setState(() {});
            }
          }, () async {
            if (widget.removeFromMyProgram != null) {
              await widget.removeFromMyProgram!(widget.item);
              setState(() {});
            }
          }, ThemeConfig.whiteColor(context), ThemeConfig.darkColor(context)),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(8, 8, 40, 8),
          child: Text(widget.item.data.toString(),
              style: TextStyle(
                  fontWeight: (widget.item.timeBlockType == TimeBlockType.saved || widget.item.timeBlockType == TimeBlockType.signedIn)
                      ? FontWeight.bold
                      : FontWeight.normal,
                  color: (widget.item.timeBlockType == TimeBlockType.saved || widget.item.timeBlockType == TimeBlockType.signedIn)
                      ? ThemeConfig.whiteColor(context)
                      : ThemeConfig.blackColor(context)),
              overflow: TextOverflow.fade),
        ),
      ],
    );
  }

  Stack getTimeVerticalVersion() {
    final start = widget.item.startTime;
    final end = widget.item.endTime;
    final durationMins = end.difference(start).inMinutes;

    // only show the time label if > 30 minutes
    final showTimeLabel = durationMins > 30;
    // only show the button if > 44 minutes
    final showButton    = durationMins > 50;

    return Stack(
      children: [
        Positioned.fill(
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.max,
              children: [
                // from–to label
                if (showTimeLabel)
                  Text(
                    '${DateFormat.Hm().format(start)} - ${DateFormat.Hm().format(end)}',
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w300,
                      color: (widget.item.timeBlockType == TimeBlockType.saved ||
                          widget.item.timeBlockType == TimeBlockType.signedIn)
                          ? ThemeConfig.whiteColorDarker(context)
                          : ThemeConfig.blackColor(context),
                    ),
                  ),

                const SizedBox(height: 4),

                Flexible(
                  fit: FlexFit.loose,
                  child: Text(
                    widget.item.data.toString(),
                    overflow: TextOverflow.fade,
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: (widget.item.timeBlockType == TimeBlockType.saved ||
                          widget.item.timeBlockType == TimeBlockType.signedIn)
                          ? FontWeight.bold
                          : FontWeight.w500,
                      color: (widget.item.timeBlockType == TimeBlockType.saved ||
                          widget.item.timeBlockType == TimeBlockType.signedIn)
                          ? ThemeConfig.whiteColor(context)
                          : ThemeConfig.blackColor(context),
                    ),
                  ),
                ),

                if (showButton)
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: ButtonsHelper.getAddToMyProgramButton(
                      TimeBlockHelper.getTimetableItemTypeAsCanSignIn(widget.item.timeBlockType),
                          () async {
                        if (widget.addToMyProgram != null) {
                          await widget.addToMyProgram!(widget.item);
                          setState(() {});
                        }
                      },
                          () async {
                        if (widget.removeFromMyProgram != null) {
                          await widget.removeFromMyProgram!(widget.item);
                          setState(() {});
                        }
                      },
                      ThemeConfig.whiteColor(context),
                      ThemeConfig.darkColor(context),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
