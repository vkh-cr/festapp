import 'package:flutter/material.dart';
import 'package:fstapp/components/timeline/schedule_timeline_helper.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';

class TimetableEventWidget extends StatefulWidget {
  final TimeBlockItem item;
  final double pixelsInHour;
  final double minimalPadding;
  final double itemHeight;
  final Function(int)? onItemTap;
  final Future<void> Function(TimeBlockItem)? addToMyProgram;
  final Future<void> Function(TimeBlockItem)? removeFromMyProgram;
  final double Function(double, DateTime, DateTime) timeRangeLength;

  const TimetableEventWidget({super.key,
    required this.item,
    required this.pixelsInHour,
    required this.minimalPadding,
    required this.itemHeight,
    this.onItemTap,
    this.addToMyProgram,
    this.removeFromMyProgram,
    required this.timeRangeLength,
  });

  @override
  _TimetableEventWidgetState createState() => _TimetableEventWidgetState();
}

class _TimetableEventWidgetState extends State<TimetableEventWidget> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        widget.onItemTap?.call(widget.item.id);
        setState(() {});
      },
      child: Container(
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.onSurface,
          borderRadius: BorderRadius.circular(6),
          // boxShadow: const [
          //   BoxShadow(
          //     color: Colors.black26,
          //     blurRadius: 10,
          //     offset: Offset(0, 4),
          //   ),
          // ],
        ),
        child: Container(
          width: widget.timeRangeLength(widget.pixelsInHour, widget.item.startTime, widget.item.endTime) - widget.minimalPadding * 2,
          height: widget.itemHeight,
          decoration: BoxDecoration(
            color: (widget.item.timeBlockType == TimeBlockType.saved || widget.item.timeBlockType == TimeBlockType.signedIn)
                ? ThemeConfig.timetableSelectedColor(context, ThemeConfig.eventTypeToColorTimetable(context, widget.item.eventType))
                : ThemeConfig.timetableUnselectedColor(context, ThemeConfig.eventTypeToColorTimetable(context, widget.item.eventType)),
            borderRadius: BorderRadius.circular(6),
          ),
          child: Stack(
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
          ),
        ),
      ),
    );
  }
}
