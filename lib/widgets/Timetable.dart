import 'package:avapp/appConfig.dart';
import 'package:avapp/data/DataService.dart';
import 'package:avapp/models/EventModel.dart';
import 'package:avapp/models/PlaceModel.dart';
import 'package:avapp/pages/EventPage.dart';
import 'package:avapp/widgets/ButtonsHelper.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class TimetableController {
  void Function()? reset;
}

class Timetable extends StatefulWidget {
  final TimetableController? controller;

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
  final double pixelsInHour = 200;
  final double placeTitleHeight = 40;
  final double timelineHeight = 30;
  final double itemHeight = 56;
  final int animationDuration = 1000;
  final double velocityAnimationSpeed = 0.5;

  Offset offset = const Offset(0, 0);

  late TransformationController transformationController;
  late BoxConstraints constraints;

  Matrix4 matrixTimetable = Matrix4.translationValues(0, 0, 0);
  Matrix4 matrixPlaceTitles = Matrix4.translationValues(0, 0, 0);
  Matrix4 matrixTimeline = Matrix4.translationValues(0, 0, 0);

  int? hourCount;
  int? firstHour;
  int? lastHour;

  _TimetableState(TimetableController? timetableController) {
    if(timetableController!=null){
      timetableController.reset = () {
        _animationController.stop();
        setOffset(const Offset(0,0));
      };
    }
  }

  double getTimetableHeight() =>
      widget.timetablePlaces.length * (placeTitleHeight + itemHeight) +
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

    return LayoutBuilder(
        builder: (BuildContext context, BoxConstraints cConstraints) {
      constraints = cConstraints;

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
              widget.timetablePlaces.length,
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
                          widget.timetablePlaces[i].title,
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

      return Stack(
        children: [
          GestureDetector(
              behavior: HitTestBehavior.translucent,
              onPanStart: panStarted,
              onPanUpdate: enforceConstraints,
              onPanEnd: panEnded,
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
      );
    });
  }

  //support max 1 day skipping
  double timeRangeLength(
      double pixelsPerHour, DateTime startTime, DateTime endTime) {
    var range = DateTimeRange(start: startTime, end: endTime);
    return range.duration.inMinutes / 60.0 * pixelsPerHour;
  }

  List<Widget> buildTimeline() {
    List<Widget> allItems = [];
    var firstEvent = widget.items.reduce((current, next) =>
        current.startTime.compareTo(next.startTime) < 0 ? current : next);

    var lastEvent = widget.items.reduce((current, next) =>
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
        isSkipping ? 24 - firstHour! + 24 - lastHour! : lastHour! - firstHour!;

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

    for (var p = 0; p < widget.timetablePlaces.length; p++) {
      var pItems = widget.items
          .where((element) => element.placeId == widget.timetablePlaces[p].id)
          .toList();
      for (var i = 0; i < pItems.length; i++) {
        var item = pItems[i];
        var timeBlock = Positioned(
          left: timeRangeLength(
              pixelsInHour, firstEvent.startTime, item.startTime),
          top: (placeTitleHeight + itemHeight) * p +
              placeTitleHeight +
              timelineHeight,
          child: GestureDetector(
            onTap: () => context.push("${EventPage.ROUTE}/${item.id}"),
            child: Container(
              width:
                  timeRangeLength(pixelsInHour, item.startTime, item.endTime),
              height: itemHeight,
              decoration: BoxDecoration(
                color: item.itemType == TimetableItemType.signed
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
                            color: item.itemType == TimetableItemType.signed
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
    await DataService.addToMyProgram(item.id);
    setState(() {
      item.itemType = TimetableItemType.signed;
    });
  }

  Future<void> removeFromMyProgram(TimetableItem item) async {
    await DataService.removeFromMyProgram(item.id);
    setState(() {
      item.itemType = TimetableItemType.notSigned;
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

    var timetableHeight = getTimetableHeight();
    var timetableWidth = getTimetableWidth();
    var windowHeight = constraints.maxHeight;
    var windowWidth = constraints.maxWidth;

    if (timetableHeight < windowHeight) {
      yOffset = 0;
    }

    if (timetableWidth < windowWidth) {
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

  void enforceConstraints(DragUpdateDetails details) {
    var offset = constrainDeltaOffset(details.delta.dx, details.delta.dy);
    setOffset(offset);
  }

  void setOffset(Offset offset) {
    setState(() {
      matrixPlaceTitles.setTranslationRaw(0, offset.dy, 0);
      matrixTimeline.setTranslationRaw(offset.dx, 0, 0);
      matrixTimetable.setTranslationRaw(offset.dx, offset.dy, 0);
    });
  }

  void panEnded(DragEndDetails details) {
    var xOffset = matrixTimetable.row0.a;
    var yOffset = matrixTimetable.row1.a;
    var velocity = details.velocity;

    var offset = constrainDeltaOffset(
        velocity.pixelsPerSecond.dx*velocityAnimationSpeed, velocity.pixelsPerSecond.dy*velocityAnimationSpeed);
    animationY = Tween<double>(begin: yOffset, end: offset.dy).animate(
        CurvedAnimation(parent: _animationController, curve: Curves.easeOutQuad));
    animationX = Tween<double>(begin: xOffset, end: offset.dx).animate(
        CurvedAnimation(parent: _animationController, curve: Curves.easeOutQuad));

    _animationController.reset();
    _animationController.forward();
  }

  void panStarted(DragStartDetails details) {
    _animationController.stop();
  }
}

enum TimetableItemType { signed, notSigned, disabled }

class TimetablePlace {
  String title;
  int id;

  TimetablePlace({required this.title, required this.id});

  factory TimetablePlace.fromJson(Map<String, dynamic> json) {
    return TimetablePlace(
      id: json[PlaceModel.idColumn],
      title: json[PlaceModel.titleColumn],
    );
  }
}

class TimetableItem {
  DateTime startTime;
  DateTime endTime;
  String text;
  TimetableItemType itemType;
  int placeId;
  int id;

  TimetableItem(
      {required this.itemType,
      required this.startTime,
      required this.endTime,
      required this.text,
      required this.placeId,
      required this.id});

  static TimetableItemType getIndicatorFromEvent(EventModel model) {
    if (model.isSignedIn) {
      return TimetableItemType.signed;
    } else if (model.isEventInMyProgram == true) {
      return TimetableItemType.signed;
    } else if (model.isGroupEvent && DataService.currentUserGroup() != null) {
      return TimetableItemType.signed;
    } else if (model.currentParticipants != null &&
        model.maxParticipants != null &&
        (!DataService.isLoggedIn() || model.isFull())) {
      return TimetableItemType.disabled;
    } else if (EventModel.canSignIn(model)) {
      return TimetableItemType.notSigned;
    }
    return TimetableItemType.notSigned;
  }

  static bool? getTimetableItemTypeAsCanSignIn(TimetableItemType type) {
    if (type == TimetableItemType.disabled) {
      return null;
    } else if (type == TimetableItemType.notSigned) {
      return true;
    }
    return false;
  }

  factory TimetableItem.fromEventModel(EventModel model) {
    return TimetableItem(
      startTime: model.startTime,
      endTime: model.endTime,
      itemType: getIndicatorFromEvent(model),
      id: model.id!,
      text: model.startTimeString(),
      placeId: model.place!.id!,
    );
  }
}