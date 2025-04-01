import 'package:flutter/gestures.dart';
import 'package:fstapp/components/timeline/schedule_timeline_helper.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/timetable/timeline_widget.dart';
import 'package:fstapp/components/timetable/timetable_items_widget.dart';
import 'package:fstapp/themeConfig.dart';

class TimetableController {
  void Function()? autoSetPosition;
  void Function()? rebuild;
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
    this.occasionEnd,
    this.controller
  });

  final DateTime? occasionEnd;
  final List<TimeBlockItem> items;
  final List<TimeBlockPlace> timetablePlaces;

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
  final double scaleSlowDownPercentage = 0.025;
  final double scaleDownIfLowerThan = 600;
  final double defaultTime = 16;

  Offset currentOffset = const Offset(0, 0);

  double currentScale = 1.0;
  double minScale = 1.0;
  bool initial = true;

  late TransformationController transformationController;
  BoxConstraints? constraints;

  Matrix4 matrixTimetable = Matrix4.translationValues(0, 0, 0);
  Matrix4 matrixPlaceTitles = Matrix4.translationValues(0, 0, 0);
  Matrix4 matrixTimeline = Matrix4.translationValues(0, 0, 0);

  int? hourCount;
  int? firstHour;
  int? lastHour;

  DateTime? startTime;
  DateTime? endTime;

  List<TimeBlockItem> usedItems = [];
  List<TimeBlockPlace> usedPlaces = [];

  late TimetableItemsWidget allItems;
  IgnorePointer? timeNow;
  late TimelineWidget timelineWidget;

  _TimetableState(TimetableController? timetableController) {
    if (timetableController != null) {
      timetableController.reset = () {
        _animationController.stop();
        rebuildTimetable();
      };
      timetableController.rebuild = rebuildTimetable;
      timetableController.autoSetPosition = setNowTime;
    }
  }

  void setNowTime() {
    // Get the current time
    var now = TimeHelper.now();

    // Calculate the position of the current time
    if (now.isAfter(startTime!) && now.isBefore(endTime!)) {
      var current = TimeHelper.differenceInHours(startTime!, now) * pixelsInHour * currentScale;
      setOffsetFromTime(current);
    } else {
        setOffsetFromTime((defaultTime - startTime!.hourInDouble) * pixelsInHour * currentScale);
    }
  }

  void setOffsetFromTime(double currentTimePosition, [bool animate = false]) {
    double initialXOffset = constraints!.maxWidth / 2 - currentTimePosition;

    // Constrain the initial offset
    Offset initialOffset = constrainNewOffset(initialXOffset, 0, currentScale);
    if (initialXOffset < 0) initialXOffset = 0;

    if(animate) {
      animateToOffset(currentOffset, initialOffset);
    } else {
      setOffset(initialOffset, currentScale);
    }
  }

  double getTimetableHeight() =>
      usedPlaces.length * (placeTitleHeight + itemHeight) +
      timelineHeight;

  double getTimetableWidth() => (hourCount ?? 24) * pixelsInHour;

  double getWidgetHeight() => getTimetableHeight() > constraints!.maxHeight
      ? getTimetableHeight()
      : constraints!.maxHeight;

  double getWindowWidth(BuildContext context) {
    return MediaQuery.of(context).size.width;
  }

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

    rebuildTimetable();

    WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {
      if(initial) {
        initial = false;
        setNowTime();
      }
    });
  }

  void rebuildTimetable() {
    usedItems = <TimeBlockItem>[];
    for(var item in widget.items) {
      if(widget.timetablePlaces.map((e) => e.id).contains(item.timeBlockPlace?.id)) {
        //remove invalid items
        if(item.endTime.isBefore(item.startTime)) {
          continue;
        }
        usedItems.add(item);
      }
    }

    usedPlaces = <TimeBlockPlace>[];
    for(var item in widget.timetablePlaces) {
      if(usedItems.map((e) => e.timeBlockPlace?.id).contains(item.id)) {
        usedPlaces.add(item);
      }
    }

    var firstEvent = usedItems.reduce((current, next) =>
    current.startTime.compareTo(next.startTime) < 0 ? current : next);

    var lastEvent = usedItems.reduce((current, next) =>
    current.endTime.compareTo(next.endTime) > 0 ? current : next);

    var range = DateTimeRange(start: firstEvent.startTime, end: lastEvent.endTime);
    if (range.duration.inHours > 48) {
      throw Exception("Events range cannot exceed 48 hours.");
    }

    startTime = firstEvent.startTime.roundDown();
    endTime = lastEvent.endTime.roundUp();

    var lastHour = lastEvent.endTime.roundUp().hour;

    bool isSkipping = firstEvent.startTime.day != lastEvent.endTime.day;
    hourCount = isSkipping ? 24 - startTime!.hour + lastHour : lastHour - startTime!.hour;

    allItems = TimetableItemsWidget(
      usedItems: usedItems,
      usedPlaces: usedPlaces,
      pixelsInHour: pixelsInHour,
      minimalPadding: minimalPadding,
      placeTitleHeight: placeTitleHeight,
      itemHeight: itemHeight,
      timelineHeight: timelineHeight,
      timeRangeLength: timeRangeLength,
      height: getTimetableHeight(),
      hourCount: hourCount!,
      startTime: startTime!,
      endTime: endTime!,
      addToMyProgram: addToMyProgram,
      removeFromMyProgram: removeFromMyProgram,
      onItemTap: widget.controller?.onItemTap,
    );

    timelineWidget = TimelineWidget(
      startTime: startTime!,
      endTime: endTime!,
      hourCount: hourCount!,
      pixelsInHour: pixelsInHour,
      timelineHeight: timelineHeight,
    );

    if(!initial){
      timeNow = IgnorePointer(child: buildTimeNow());
    }
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.timetablePlaces.isEmpty || widget.timetablePlaces.isEmpty || widget.items.isEmpty) {
      return const SizedBox.shrink();
    }

    return LayoutBuilder(
        builder: (BuildContext context, BoxConstraints cConstraints) {
      constraints = cConstraints;

      updateScaleLimits();

      var timetableItems = Transform(
        transformHitTests: true,
        transform: matrixTimetable,
        child: Stack(
          children: [allItems, timeNow??SizedBox.shrink()],
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
        child: timelineWidget,
      );
      stackChildren.add(timeline);

      return Listener(
        onPointerSignal: (PointerSignalEvent event) {
          if (event is PointerScrollEvent) {
            _animationController.stop();
           var xOffset = matrixTimetable.row0.a;
           var yOffset = matrixTimetable.row1.a;

            var constrainedDelta = constrainNewOffset(xOffset-event.scrollDelta.dx, yOffset-event.scrollDelta.dy, currentScale);
            setOffset(constrainedDelta, currentScale);

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
    minScale = (constraints!.maxHeight / getTimetableHeight()).clamp(globalMinimalScale, globalMaximalScale);
    currentScale = currentScale.clamp(minScale, 1.0);
  }

  //support max 1 day skipping
  double timeRangeLength(
      double pixelsPerHour, DateTime startTime, DateTime endTime) {
    var range = DateTimeRange(start: startTime, end: endTime);
    return range.duration.inMinutes / 60.0 * pixelsPerHour;
  }

  Widget buildTimeNow() {
    var now = TimeHelper.now();
    Widget container;
    if(widget.occasionEnd != null && now.isAfter(widget.occasionEnd!)) {
      container = const SizedBox.shrink();
    } else if (now.isAfter(endTime!)) {
      container = Container(
        width: getTimetableWidth(),
        height: getTimetableHeight(),
        color: ThemeConfig.blackColor(context).withValues(alpha: ThemeConfig.timetableTimeSplitOpacity),
      );
    } else if (now.isAfter(startTime!) && now.isBefore(endTime!)) {
      container = Container(
        width: TimeHelper.differenceInHours(startTime!, now) * pixelsInHour,
        height: getTimetableHeight(),
        color: ThemeConfig.blackColor(context).withValues(alpha: ThemeConfig.timetableTimeSplitOpacity),
      );
    } else {
      container = const SizedBox.shrink();
    }

    return Stack(
      children: [
        SizedBox(
          width: getTimetableWidth(),
          height: getTimetableHeight(),
        ),
        container,
        if (now.isAfter(startTime!) && now.isBefore(endTime!))
          Positioned(
            left: TimeHelper.differenceInHours(startTime!, now) * pixelsInHour,
            child: Container(
              width: 2,
              height: getTimetableHeight(),
              decoration: BoxDecoration(
                color: ThemeConfig.timetableTimeSplitColor(context),
                boxShadow: const [
                  BoxShadow(
                    color: Colors.black26,
                    blurRadius: 10,
                    offset: Offset(0, 4),
                  ),
                ],
              ),
            ),
          ),
      ],
    );
  }

  Future<void> addToMyProgram(TimeBlockItem item) async {
    if(!await DbEvents.addToMySchedule(context, item.id)) {
      return;
    }
    setState(() {
      item.timeBlockType = TimeBlockType.saved;
    });
  }

  Future<void> removeFromMyProgram(TimeBlockItem item) async {
    await DbEvents.removeFromMySchedule(context, item.id);
    setState(() {
      item.timeBlockType = TimeBlockType.canSave;
    });
  }

  Offset constrainNewOffset(double newX, double newY, double scale) {
    double xOffset = newX > 0 ? 0 : newX;
    double yOffset = newY > 0 ? 0 : newY;

    var timetableHeight = getTimetableHeight() * scale;
    var timetableWidth = getTimetableWidth() * scale;
    var windowHeight = constraints!.maxHeight;
    var windowWidth = constraints!.maxWidth;

    if (timetableHeight <= windowHeight) {
      yOffset = 0;
    } else if (yOffset + timetableHeight < windowHeight) {
      yOffset = windowHeight - timetableHeight;
    }

    if (timetableWidth <= windowWidth) {
      xOffset = 0;
    } else if (xOffset + timetableWidth < windowWidth) {
      xOffset = windowWidth - timetableWidth;
    }

    return Offset(xOffset, yOffset);
  }

  void setOffset(Offset offset, double newScale) {
    currentOffset = offset;
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
    var velocity = details.velocity;
    if(velocity.pixelsPerSecond.dx == 0 && velocity.pixelsPerSecond.dy == 0){
      return;
    }

    var start = Offset(matrixTimetable.row0.a, matrixTimetable.row1.a);
    var end = constrainNewOffset(start.dx+
        velocity.pixelsPerSecond.dx*velocityAnimationSpeed, start.dy+velocity.pixelsPerSecond.dy*velocityAnimationSpeed, currentScale);
    animateToOffset(start, end);
  }

  void animateToOffset(Offset start, Offset end) {
    animationY = Tween<double>(begin: start.dy, end: end.dy).animate(
        CurvedAnimation(parent: _animationController, curve: Curves.easeOutQuad));
    animationX = Tween<double>(begin: start.dx, end: end.dx).animate(
        CurvedAnimation(parent: _animationController, curve: Curves.easeOutQuad));

    _animationController.duration = Duration(milliseconds: animationDuration);
    _animationController.reset();
    _animationController.forward();
  }
  
  void onScaleStarted(ScaleStartDetails details) {
    _animationController.stop();
  }

  void onScaleUpdate(ScaleUpdateDetails details) {
    Offset countedOffset = details.focalPointDelta;
    Offset localPoint = details.localFocalPoint;
    double scaleDelta = details.scale;
    Offset currentTimetableOffset = Offset(matrixTimetable.row0.a, matrixTimetable.row1.a);

    // Compute new scale
    double newScale = ((1 - ((1 - scaleDelta) * scaleSlowDownPercentage)) * currentScale).clamp(minScale, 1.0);

    // Calculate focal point relative to the timetable
    Offset focalPoint = (localPoint - currentTimetableOffset) / currentScale;

    // Compute the new offset to keep the focal point stable
    Offset newOffset = localPoint - focalPoint * newScale + countedOffset;

    // Constrain the new offset to ensure the timetable stays within bounds
    Offset constrainedOffset = constrainNewOffset(newOffset.dx, newOffset.dy, newScale);

    // Update the current scale and offset
    currentScale = newScale;
    setOffset(constrainedOffset, currentScale);
  }
}