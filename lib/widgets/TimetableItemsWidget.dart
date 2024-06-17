import 'package:flutter/material.dart';
import 'package:fstapp/widgets/TimetableHelper.dart';
import 'package:fstapp/widgets/TimetableEventWidget.dart';

class TimetableItemsWidget extends StatefulWidget {
  final List<TimetableItem> usedItems;
  final List<TimetablePlace> usedPlaces;
  final double pixelsInHour;
  final double minimalPadding;
  final double placeTitleHeight;
  final double itemHeight;
  final double timelineHeight;
  final double height;
  final Function(int)? onItemTap;
  final Future<void> Function(TimetableItem)? addToMyProgram;
  final Future<void> Function(TimetableItem)? removeFromMyProgram;
  final double Function(double, DateTime, DateTime) timeRangeLength;
  final DateTime startTime;
  final DateTime endTime;
  final int hourCount;

  const TimetableItemsWidget({super.key,
    required this.usedItems,
    required this.usedPlaces,
    required this.pixelsInHour,
    required this.minimalPadding,
    required this.placeTitleHeight,
    required this.itemHeight,
    required this.timelineHeight,
    required this.height,
    this.onItemTap,
    this.addToMyProgram,
    this.removeFromMyProgram,
    required this.timeRangeLength,
    required this.startTime,
    required this.endTime,
    required this.hourCount,
  });

  @override
  _TimetableItemsWidgetState createState() => _TimetableItemsWidgetState();
}

class _TimetableItemsWidgetState extends State<TimetableItemsWidget> {
  @override
  void initState() {
    super.initState();
  }

  List<Widget> buildTimeline() {
    List<Widget> allItems = [];

    allItems.add(Row(
      children: List<Widget>.generate(
        widget.hourCount,
            (i) => Container(
          width: widget.pixelsInHour,
          height: widget.height,
          decoration: BoxDecoration(
            border: const Border(
              left: BorderSide(width: 0.25, color: Colors.grey),
              right: BorderSide(width: 0.25, color: Colors.grey),
            ),
            color: i % 2 == 0 ? Colors.white70 : Colors.white70,
          ),
        ),
      ),
    ));

    for (var p = 0; p < widget.usedPlaces.length; p++) {
      var pItems = widget.usedItems
          .where((element) => element.placeId == widget.usedPlaces[p].id)
          .toList();
      for (var i = 0; i < pItems.length; i++) {
        var item = pItems[i];
        var timeBlock = Positioned(
          left: widget.timeRangeLength(widget.pixelsInHour, widget.startTime, item.startTime) + widget.minimalPadding,
          top: (widget.placeTitleHeight + widget.itemHeight) * p + widget.placeTitleHeight + widget.timelineHeight,
          child: TimetableEventWidget(
            item: item,
            pixelsInHour: widget.pixelsInHour,
            minimalPadding: widget.minimalPadding,
            itemHeight: widget.itemHeight,
            onItemTap: widget.onItemTap,
            addToMyProgram: widget.addToMyProgram,
            removeFromMyProgram: widget.removeFromMyProgram,
            timeRangeLength: widget.timeRangeLength,
          ),
        );
        allItems.add(timeBlock);
      }
    }

    setState(() {
      // Update the state with the built timeline
    });

    return allItems;
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: buildTimeline(),
    );
  }
}
