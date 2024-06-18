import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/models/EventModel.dart';

class ScheduleTimelineHelper{
  static List<EventGroup> splitEventsByAlternativeSplit(Iterable<TimeLineItem> events) {
    // Group events by AlternativeSplit.id, handling null case
    Map<int?, List<TimeLineItem>> groupedByAlternativeSplit = {};
    for (var event in events) {
      int? alternativeSplitId = event.alternativeSplit?.id;
      if (!groupedByAlternativeSplit.containsKey(alternativeSplitId)) {
        groupedByAlternativeSplit[alternativeSplitId] = [];
      }
      groupedByAlternativeSplit[alternativeSplitId]!.add(event);
    }

    // Convert to a list of EventGroup and order by AlternativeSplit.order, handling null case
    List<EventGroup> eventGroups = groupedByAlternativeSplit.entries.map((entry) {
      var alternativeSplit = entry.value.first.alternativeSplit;
      String title = alternativeSplit!.title;
      return EventGroup(
        title: title,
        events: entry.value,
      );
    }).toList();

    // Sort the event groups by AlternativeSplit.order, with nulls (max order) at the end
    eventGroups.sort((a, b) {
      int orderA = a.events.first.alternativeSplit?.order ?? double.maxFinite.toInt();
      int orderB = b.events.first.alternativeSplit?.order ?? double.maxFinite.toInt();
      return orderA.compareTo(orderB);
    });

    return eventGroups;
  }

  static List<EventGroup> splitEventsByDay(List<TimeLineItem> events, BuildContext context) {
    Map<String, List<TimeLineItem>> groupedByDay = {};

    for (var event in events) {
      String day = DateFormat("EEEE d. MMMM ", context.locale.languageCode).format(event.startTime);
      day = day[0].toUpperCase() + day.substring(1);

      if (!groupedByDay.containsKey(day)) {
        groupedByDay[day] = [];
      }
      groupedByDay[day]!.add(event);
    }

    return groupedByDay.entries.map((entry) {
      return EventGroup(title: entry.key, events: entry.value);
    }).toList();
  }

  static List<EventGroup> splitEvents(List<TimeLineItem> events) {
    List<EventGroup> eventGroups;
    if (events.any((a)=> a.alternativeSplit != null)) {
      eventGroups = ScheduleTimelineHelper.splitEventsByAlternativeSplit(events.where((e)=>e.alternativeSplit!=null));
    } else {
      eventGroups = ScheduleTimelineHelper.splitEventsByTimeOfDay(events);
    }
    return eventGroups;
  }

    static List<EventGroup> splitEventsByTimeOfDay(List<TimeLineItem> events) {
    List<TimeLineItem> morningEvents = events.where((e) => e.startTime.hour <= 12).toList();
    List<TimeLineItem> afternoonEvents = events.where((e) => e.startTime.hour > 12 && e.startTime.hour < 18).toList();
    List<TimeLineItem> eveningEvents = events.where((e) => e.startTime.hour >= 18).toList();

    bool hasMultipleGroups = [
      morningEvents,
      afternoonEvents,
      eveningEvents
    ].where((group) => group.isNotEmpty).length > 1;

    return [
      EventGroup(title: "", events: morningEvents), // No title for morning
      if (hasMultipleGroups && afternoonEvents.isNotEmpty)
        EventGroup(title: "Afternoon".tr(), events: afternoonEvents),
      if (hasMultipleGroups && eveningEvents.isNotEmpty)
        EventGroup(title: "Evening".tr(), events: eveningEvents),
    ];
  }
}

class AlternativeSplit {
  final int id;
  final String title;
  final int order;

  AlternativeSplit({required this.id, required this.title, required this.order});
}

class EventGroup {
  final String title;
  final List<TimeLineItem> events;

  EventGroup({required this.title, required this.events});
}

enum DotType {
  dot, open, closed
}

class TimeLineItem {
  DateTime startTime;
  DotType dotType;
  String leftText;
  String rightText;
  final int id;
  AlternativeSplit? alternativeSplit;

  TimeLineItem({
    required this.dotType,
    required this.startTime,
    required this.leftText,
    required this.rightText,
    required this.id,
    this.alternativeSplit,
  });

  static DotType getIndicatorFromEvent(EventModel model) {
    if (model.isSignedIn) {
      return DotType.closed;
    } else if (model.isGroupEvent && model.isMyGroupEvent) {
      return DotType.closed;
    } else if (model.currentParticipants != null && model.maxParticipants != null && model.isFull()) {
      return DotType.dot;
    } else if (EventModel.isEventSupportingSignIn(model)) {
      return DotType.open;
    }
    return DotType.dot;
  }

  factory TimeLineItem.fromEventModel(EventModel model, [bool useAlternativeSplit = false]) {
    return TimeLineItem(
      startTime: model.startTime,
      dotType: getIndicatorFromEvent(model),
      id: model.id!,
      leftText: model.startTimeString(),
      rightText: model.toString(),
      alternativeSplit:
        useAlternativeSplit && model.place != null && model.place!.id != null && model.place!.title != null && model.place!.order != null ?
            AlternativeSplit(id: model.place!.id!, title: model.place!.title!, order: model.place!.order!)
            : null
    );
  }

  factory TimeLineItem.fromEventModelAsChild(EventModel model) {
    return TimeLineItem(
      startTime: model.startTime,
      dotType: getIndicatorFromEvent(model),
      id: model.id!,
      leftText: model.durationTimeString(),
      rightText: model.toString(),
      alternativeSplit: null,
    );
  }

  factory TimeLineItem.forCompanion(EventModel model) {
    return TimeLineItem(
      startTime: model.startTime,
      dotType: DotType.closed,
      id: model.id!,
      leftText: model.durationTimeString(),
      rightText: model.toString(),
    );
  }
}