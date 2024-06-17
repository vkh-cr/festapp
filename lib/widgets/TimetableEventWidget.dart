import 'package:flutter/material.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/TimetableHelper.dart';

class TimetableEventWidget extends StatefulWidget {
  final TimetableItem item;
  final double pixelsInHour;
  final double minimalPadding;
  final double itemHeight;
  final Function(int)? onItemTap;
  final Future<void> Function(TimetableItem)? addToMyProgram;
  final Future<void> Function(TimetableItem)? removeFromMyProgram;
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
        width: widget.timeRangeLength(widget.pixelsInHour, widget.item.startTime, widget.item.endTime) - widget.minimalPadding * 2,
        height: widget.itemHeight,
        decoration: BoxDecoration(
          color: (widget.item.itemType == TimetableItemType.saved || widget.item.itemType == TimetableItemType.signedIn)
              ? AppConfig.eventTypeToColor(widget.item.eventType).withOpacity(1)
              : AppConfig.eventTypeToColor(widget.item.eventType).withOpacity(0.3),
          borderRadius: BorderRadius.circular(6),
        ),
        child: Stack(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: ButtonsHelper.getAddToMyProgramButton(
                  TimetableItem.getTimetableItemTypeAsCanSignIn(widget.item.itemType), () async {
                if (widget.addToMyProgram != null) {
                  await widget.addToMyProgram!(widget.item);
                  setState(() {});
                }
              }, () async {
                if (widget.removeFromMyProgram != null) {
                  await widget.removeFromMyProgram!(widget.item);
                  setState(() {});
                }
              }, Colors.white),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 8, 40, 8),
              child: Text(widget.item.text,
                  style: TextStyle(
                      color: (widget.item.itemType == TimetableItemType.saved || widget.item.itemType == TimetableItemType.signedIn)
                          ? Colors.white
                          : Colors.black),
                  overflow: TextOverflow.fade),
            ),
          ],
        ),
      ),
    );
  }
}
