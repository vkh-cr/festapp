import 'dart:ui';

import 'package:flutter/gestures.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/widgets/TimetableHelper.dart';

class TimetableController {
  void Function()? reset;
  void Function(int)? onItemTap;

  TimetableController({this.onItemTap});
}

class Timetable extends StatefulWidget {
  final TimetableController? controller;
  static const int minimalDurationMinutes = 25;

  const Timetable({
    super.key,
    required this.items,
    required this.timetablePlaces,
    this.controller
  });

  final List<TimetableItem> items;
  final List<TimetablePlace> timetablePlaces;

  @override
  State<Timetable> createState() => _TimetableState(controller);
}

class _TimetableState extends State<Timetable> with TickerProviderStateMixin {
  final double minimalPadding = 1.5;
  final double pixelsInHour = 200;
  final double placeTitleHeight = 40;
  final double timelineHeight = 30;
  final double itemHeight = 56;
  final int animationDuration = 1000;
  final double velocityAnimationSpeed = 0.5;
  final double globalMinimalScale = 0.2;
  final double globalMaximalScale = 1.0;
  final double scaleSlowDownPercentage = 0.05;

  double currentScale = 1.0;
  double minScale = 1.0;

  late TransformationController transformationController;
  late BoxConstraints constraints;

  Matrix4 matrixTimetable = Matrix4.translationValues(0, 0, 0);
  Matrix4 matrixPlaceTitles = Matrix4.translationValues(0, 0, 0);
  Matrix4 matrixTimeline = Matrix4.translationValues(0, 0, 0);

  int? hourCount;
  int? firstHour;
  int? lastHour;

  List<TimetableItem> usedItems = [];
  List<TimetablePlace> usedPlaces = [];

  _TimetableState(TimetableController? timetableController) {
    if(timetableController!=null){
      timetableController.reset = () {
        _animationController.stop();
        setOffset(const Offset(0,0), currentScale);
      };
    }
  }

  double getTimetableHeight() =>
      usedPlaces.length * (placeTitleHeight + itemHeight) +
      timelineHeight;

  double getTimetableWidth() => (hourCount ?? 24) * pixelsInHour;

  double getWidgetHeight() => getTimetableHeight() > constraints.maxHeight
      ? getTimetableHeight()
      : constraints.maxHeight;

  late AnimationController _animationController;
  late Animation<double> animationX =
      CurvedAnimation(parent: _animationController, curve: Curves.easeIn);
  late Animation<double> animationY =
      CurvedAnimation(parent: _animationController, curve: Curves.easeIn);

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
        vsync: this, duration: Duration(milliseconds: animationDuration));
    _animationController.addListener(() {
      setState(() {
        matrixPlaceTitles.setTranslationRaw(0, animationY.value, 0);
        matrixTimeline.setTranslationRaw(animationX.value, 0, 0);
        matrixTimetable.setTranslationRaw(
            animationX.value, animationY.value, 0);
      });
    });
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.timetablePlaces.isEmpty || widget.timetablePlaces.isEmpty) {
      return const SizedBox.shrink();
    }

    usedItems = <TimetableItem>[];
    for(var item in widget.items) {
        if(widget.timetablePlaces.map((e) => e.id).contains(item.placeId))
        {
          //remove invalid items
          if(item.endTime.isBefore(item.startTime))
          {
            continue;
          }
          usedItems.add(item);
        }
    }

    usedPlaces = <TimetablePlace>[];
    for(var item in widget.timetablePlaces) {
      if(usedItems.map((e) => e.placeId).contains(item.id))
      {
        usedPlaces.add(item);
      }
    }

    return LayoutBuilder(
        builder: (BuildContext context, BoxConstraints cConstraints) {
      constraints = cConstraints;

      updateScaleLimits();

      List<Widget> allItems = buildTimeline();

      var timetableItems = Transform(
        transformHitTests: true,
        transform: matrixTimetable,
        child: Stack(
          children: allItems,
        ),
      );
      List<Widget> stackChildren = [timetableItems];

      var placeTitles = Transform(
        transform: matrixPlaceTitles,
        child: Stack(
          children: List<Widget>.generate(
              usedPlaces.length,
              (i) => Padding(
                    padding: EdgeInsets.fromLTRB(
                        0,
                        i * (itemHeight + placeTitleHeight) + timelineHeight,
                        0,
                        0),
                    child: Container(
                      height: placeTitleHeight,
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          usedPlaces[i].title,
                          style: const TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                  )),
        ),
      );
      stackChildren.add(placeTitles);

      var timeline = Transform(
        transform: matrixTimeline,
        child: Stack(
          children: List<Widget>.generate(hourCount! + 1, (i) {
            var hour = firstHour! + i;
            if (hour > 23) {
              hour -= 24;
            }
            return Padding(
              padding: EdgeInsets.fromLTRB(
                  i == 0 ? 0 : i * pixelsInHour - pixelsInHour / 2, 0, 0, 0),
              child: Container(
                color: AppConfig.color1,
                height: timelineHeight,
                width: (i == hourCount! || i == 0)
                    ? pixelsInHour / 2
                    : pixelsInHour,
                alignment: i == 0
                    ? Alignment.centerLeft
                    : i == hourCount!
                        ? Alignment.centerRight
                        : Alignment.center,
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    "$hour:00",
                    style: const TextStyle(color: Colors.white),
                  ),
                ),
              ),
            );
          }),
        ),
      );
      stackChildren.add(timeline);

      return Listener(
        onPointerSignal: (PointerSignalEvent event) {
          if (event is PointerScrollEvent) {
            _animationController.stop();
            // var xOffset = matrixTimetable.row0.a;
            // var yOffset = matrixTimetable.row1.a;

            var constrained = constrainDeltaOffset(-event.scrollDelta.dx, -event.scrollDelta.dy);
            setOffset(constrained, currentScale);

            // animationY = Tween<double>(begin: yOffset, end: constrained.dy).animate(
            //     CurvedAnimation(parent: _animationController, curve: Curves.easeOut));
            // animationX = Tween<double>(begin: xOffset, end: constrained.dx).animate(
            //     CurvedAnimation(parent: _animationController, curve: Curves.easeOut));
            //
            // _animationController.duration = Duration(milliseconds: scrollAnimationDuration);
            // _animationController.reset();
            // _animationController.forward();
          }
        },
        child: Stack(
          children: [
            GestureDetector(
                behavior: HitTestBehavior.translucent,
                onScaleEnd: onScaleEnded,
                onScaleStart: onScaleStarted,
                onScaleUpdate: onScaleUpdate,
                child: SingleChildScrollView(
                    physics: const NeverScrollableScrollPhysics(),
                    scrollDirection: Axis.horizontal,
                    child: SingleChildScrollView(
                        physics: const NeverScrollableScrollPhysics(),
                        scrollDirection: Axis.vertical,
                        child: Stack(
                          children: stackChildren,
                        ))))
          ],
        ),
      );
    });
  }

  void updateScaleLimits() {
    minScale = (constraints.maxHeight / getTimetableHeight()).clamp(globalMinimalScale, globalMaximalScale);
    currentScale = currentScale.clamp(minScale, 1.0);
  }

  //support max 1 day skipping
  double timeRangeLength(
      double pixelsPerHour, DateTime startTime, DateTime endTime) {
    var range = DateTimeRange(start: startTime, end: endTime);
    return range.duration.inMinutes / 60.0 * pixelsPerHour;
  }

  List<Widget> buildTimeline() {
    List<Widget> allItems = [];
    var firstEvent = usedItems.reduce((current, next) =>
        current.startTime.compareTo(next.startTime) < 0 ? current : next);

    var lastEvent = usedItems.reduce((current, next) =>
        current.endTime.compareTo(next.endTime) > 0 ? current : next);

    var range =
        DateTimeRange(start: firstEvent.startTime, end: lastEvent.endTime);
    if (range.duration.inHours > 48) {
      throw Exception("Events range cannot exceed 48 hours.");
    }
    firstHour = firstEvent.startTime.hour;
    lastHour = lastEvent.endTime.minute > 0
        ? lastEvent.endTime.hour + 1
        : lastEvent.endTime.hour;

    bool isSkipping = firstEvent.startTime.day != lastEvent.endTime.day;
    hourCount =
        isSkipping ? 24 - firstHour! + lastHour! : lastHour! - firstHour!;

    allItems.add(Row(
      children: List<Widget>.generate(
        hourCount!,
        (i) => Container(
          width: pixelsInHour,
          height: getWidgetHeight(),
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

    for (var p = 0; p < usedPlaces.length; p++) {
      var pItems = usedItems
          .where((element) => element.placeId == usedPlaces[p].id)
          .toList();
      for (var i = 0; i < pItems.length; i++) {
        var item = pItems[i];
        var timeBlock = Positioned(
          left: timeRangeLength(
              pixelsInHour, firstEvent.startTime, item.startTime)+minimalPadding,
          top: (placeTitleHeight + itemHeight) * p +
              placeTitleHeight +
              timelineHeight,
          child: GestureDetector(
            onTap: (){
              widget.controller?.onItemTap?.call(item.id);
            },
            child: Container(
              width:
                  timeRangeLength(pixelsInHour, item.startTime, item.endTime)-minimalPadding*2,
              height: itemHeight,
              decoration: BoxDecoration(
                color: (item.itemType == TimetableItemType.saved || item.itemType == TimetableItemType.signedIn)
                    ? AppConfig.color2
                    : Colors.black26,
                borderRadius: BorderRadius.circular(6),
              ),
              child: Stack(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: ButtonsHelper.getAddToMyProgramButton(
                        TimetableItem.getTimetableItemTypeAsCanSignIn(
                            item.itemType), () async {
                      await addToMyProgram(item);
                    }, () async {
                      await removeFromMyProgram(item);
                    }, Colors.white),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(8, 8, 40, 8),
                    child: Text(item.text,
                        style: TextStyle(
                            color: (item.itemType == TimetableItemType.saved || item.itemType == TimetableItemType.signedIn)
                                ? Colors.white
                                : Colors.black),
                        overflow: TextOverflow.fade),
                  ),
                ],
              ),
            ),
          ),
        );
        allItems.add(timeBlock);
      }
    }

    return allItems;
  }

  Future<void> addToMyProgram(TimetableItem item) async {
    if(!await DataService.addToMySchedule(item.id)) {
      return;
    }
    setState(() {
      item.itemType = TimetableItemType.saved;
    });
  }

  Future<void> removeFromMyProgram(TimetableItem item) async {
    await DataService.removeFromMySchedule(item.id);
    setState(() {
      item.itemType = TimetableItemType.canSave;
    });
  }

  Offset constrainDeltaOffset(double deltaX, double deltaY) {
    var xOffset = matrixTimetable.row0.a + deltaX;
    var yOffset = matrixTimetable.row1.a + deltaY;
    if (xOffset > 0) {
      xOffset = 0;
    }

    if (yOffset > 0) {
      yOffset = 0;
    }

    var timetableHeight = getTimetableHeight() * currentScale;
    var timetableWidth = getTimetableWidth() * currentScale;
    var windowHeight = constraints.maxHeight;
    var windowWidth = constraints.maxWidth;

    if (timetableHeight <= windowHeight) {
      yOffset = 0;
    }

    if (timetableWidth <= windowWidth) {
      xOffset = 0;
    } else if (xOffset + timetableWidth - windowWidth < 0) {
      xOffset = windowWidth - timetableWidth;
    }

    if (timetableHeight > windowHeight) {
      if (yOffset + timetableHeight - windowHeight < 0) {
        yOffset = windowHeight - timetableHeight;
      }
    }
    return Offset(xOffset, yOffset);
  }

  void setOffset(Offset offset, double newScale) {
    setState(() {
      matrixTimetable = Matrix4.identity()
        ..scale(newScale)
        ..setTranslationRaw(offset.dx, offset.dy, 0);

      matrixPlaceTitles = Matrix4.identity()
        ..scale(newScale)
        ..setTranslationRaw(0, offset.dy, 0);

      matrixTimeline = Matrix4.identity()
        ..scale(newScale)
        ..setTranslationRaw(offset.dx, 0, 0);
    });
  }

  void onScaleEnded(ScaleEndDetails details) {
    var xOffset = matrixTimetable.row0.a;
    var yOffset = matrixTimetable.row1.a;
    var velocity = details.velocity;

    var offset = constrainDeltaOffset(
        velocity.pixelsPerSecond.dx*velocityAnimationSpeed, velocity.pixelsPerSecond.dy*velocityAnimationSpeed);
    animationY = Tween<double>(begin: yOffset, end: offset.dy).animate(
        CurvedAnimation(parent: _animationController, curve: Curves.easeOutQuad));
    animationX = Tween<double>(begin: xOffset, end: offset.dx).animate(
        CurvedAnimation(parent: _animationController, curve: Curves.easeOutQuad));

    _animationController.duration = Duration(milliseconds: animationDuration);
    _animationController.reset();
    _animationController.forward();
  }
  
  void onScaleStarted(ScaleStartDetails details) {
    _animationController.stop();
  }

  void onScaleUpdate(ScaleUpdateDetails details){
    var offset = constrainDeltaOffset(details.focalPointDelta.dx, details.focalPointDelta.dy);
    currentScale = ((1-((1-details.scale) * scaleSlowDownPercentage)) * currentScale).clamp(minScale, 1.0);
    setOffset(offset, currentScale);
  }
}