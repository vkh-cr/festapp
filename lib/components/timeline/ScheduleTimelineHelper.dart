import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/services/TimeHelper.dart';

class TimeBlockHelper {
  static TimeBlockType getTimeBlockTypeFromModel(EventModel model) {
    if (model.isSignedIn) {
      return TimeBlockType.signedIn;
    } else if (model.isEventInMySchedule == true) {
      return TimeBlockType.saved;
    } else if (model.isGroupEvent) {
      if(model.isMyGroupEvent) {
        return TimeBlockType.signedIn;
      }
      return TimeBlockType.noAction;
    } else if (model.currentParticipants != null && model.maxParticipants != null && model.isFull()) {
      return TimeBlockType.isFull;
    } else if (EventModel.isEventSupportingSignIn(model)) {
      return TimeBlockType.canSignIn;
    }
    return TimeBlockType.canSave;
  }

  static List<TimeBlockGroup> splitTimeBlockByPlace(Iterable<TimeBlockItem> events) {
    // Group events by AlternativeSplit.id, handling null case
    Map<int?, List<TimeBlockItem>> groupedByAlternativeSplit = {};
    for (var event in events) {
      int? alternativeSplitId = event.timeBlockPlace?.id;
      if (!groupedByAlternativeSplit.containsKey(alternativeSplitId)) {
        groupedByAlternativeSplit[alternativeSplitId] = [];
      }
      groupedByAlternativeSplit[alternativeSplitId]!.add(event);
    }

    // Convert to a list of EventGroup and order by AlternativeSplit.order, handling null case
    List<TimeBlockGroup> eventGroups = groupedByAlternativeSplit.entries.map((entry) {
      var alternativeSplit = entry.value.first.timeBlockPlace;
      String title = alternativeSplit!.title;
      return TimeBlockGroup(
        title: title,
        events: entry.value,
      );
    }).toList();

    // Sort the event groups by AlternativeSplit.order, with nulls (max order) at the end
    eventGroups.sort((a, b) {
      int orderA = a.events.first.timeBlockPlace?.order ?? double.maxFinite.toInt();
      int orderB = b.events.first.timeBlockPlace?.order ?? double.maxFinite.toInt();
      return orderA.compareTo(orderB);
    });

    return eventGroups;
  }

  static List<TimeBlockGroup> splitTimeBlocksByDay(Iterable<TimeBlockItem> events, BuildContext context) {
    Map<String, List<TimeBlockItem>> groupedByDay = {};

    for (var event in events) {
      String day = DateFormat("EEEE d. MMMM ", context.locale.languageCode).format(event.startTime);
      day = day[0].toUpperCase() + day.substring(1);

      if (!groupedByDay.containsKey(day)) {
        groupedByDay[day] = [];
      }
      groupedByDay[day]!.add(event);
    }

    return groupedByDay.entries.map((entry) {
      return TimeBlockGroup(title: entry.key, events: entry.value);
    }).toList();
  }

  static List<TimeBlockGroup> splitTimeBlocks(Iterable<TimeBlockItem> events) {
    List<TimeBlockGroup> eventGroups;
    if (AppConfig.isSplitByPlace) {
      eventGroups = TimeBlockHelper.splitTimeBlockByPlace(events.where((e)=>e.timeBlockPlace!=null));
    } else {
      eventGroups = TimeBlockHelper.splitTimeBlocksByTimeOfDay(events);
    }
    return eventGroups;
  }

  static List<TimeBlockGroup> splitTimeBlocksByDate(Iterable<TimeBlockItem> events, BuildContext context, int splitHour) {
    List<TimeBlockGroup> toReturn = [];
    if(events.isEmpty){
      return toReturn;
    }
    var fromD = events.first.startTime.subtract(const Duration(days: 1));
    var fromDate = DateTime(fromD.year, fromD.month, fromD.day);
    var tested = fromDate.add(Duration(hours: splitHour));

    while(!tested.isAfter(events.last.startTime)) {
      var testedPlusDay = tested.add(const Duration(days: 1));
      var eventsFocused = events.where((e)=>e.startTime.isAfter(tested) && (e.startTime.isAtSameMomentAs(testedPlusDay) || e.startTime.isBefore(testedPlusDay))).toList();
      if(eventsFocused.isNotEmpty) {
        toReturn.add(TimeBlockGroup(title: eventsFocused.first.startTime.weekdayToString(context), events: eventsFocused, dateTime: tested));
      }
      tested = testedPlusDay;
    }
    return toReturn;
  }

  static List<TimeBlockGroup> splitTimeBlocksByTimeOfDay(Iterable<TimeBlockItem> events) {
    List<TimeBlockItem> morningEvents = events.where((e) => e.startTime.hour <= 12).toList();
    List<TimeBlockItem> afternoonEvents = events.where((e) => e.startTime.hour > 12 && e.startTime.hour < 18).toList();
    List<TimeBlockItem> eveningEvents = events.where((e) => e.startTime.hour >= 18).toList();

    bool hasMultipleGroups = [morningEvents, afternoonEvents, eveningEvents].where((group) => group.isNotEmpty).length > 1;

    TimeBlockGroup createGroup(String title, List<TimeBlockItem> events) {
      return TimeBlockGroup(title: hasMultipleGroups ? title.tr() : "", events: events);
    }

    return [
      createGroup("", morningEvents),
      if (afternoonEvents.isNotEmpty) createGroup("Afternoon".tr(), afternoonEvents),
      if (eveningEvents.isNotEmpty) createGroup("Evening".tr(), eveningEvents),
    ];
  }

  static bool? getTimetableItemTypeAsCanSignIn(TimeBlockType type) {
    if (type == TimeBlockType.canSave) {
      return true;
    } else if (type == TimeBlockType.saved) {
      return false;
    }
    return null;
  }
}

class TimeBlockPlace {
  final int id;
  final String title;
  final int? order;

  TimeBlockPlace({required this.id, required this.title, required this.order});

  factory TimeBlockPlace.fromPlaceModel(PlaceModel place){
    return TimeBlockPlace(id: place.id!, title: place.title ?? "---", order: place.order ?? 0);
  }
}

class TimeBlockGroup {
  final String title;
  final DateTime? dateTime;
  final List<TimeBlockItem> events;

  TimeBlockGroup({required this.title, required this.events, this.dateTime});
}

enum TimeBlockType {
  saved,
  canSave,
  noAction,
  signedIn,
  isFull,
  canSignIn,
}

class TimeBlockItem {
  DateTime startTime;
  DateTime endTime;
  TimeBlockType timeBlockType;
  dynamic data;
  final int id;
  TimeBlockPlace? timeBlockPlace;
  String? eventType;

  TimeBlockItem({
    required this.timeBlockType,
    required this.startTime,
    required this.endTime,
    required this.id,
    this.data,
    this.timeBlockPlace,
    this.eventType
  });

  factory TimeBlockItem.fromEventModelForTimeTable(EventModel model) {
    return TimeBlockItem(
      startTime: model.startTime.eventLocalTime(),
      endTime: model.endTime.eventLocalTime(),
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      id: model.id!,
      data: model.toString(),
      eventType: model.type,
      timeBlockPlace: model.place != null ? TimeBlockPlace.fromPlaceModel(model.place!) : null,
    );
  }

  factory TimeBlockItem.fromEventModel(EventModel model) {
    return TimeBlockItem(
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      id: model.id!,
      data: {"leftText": model.startTimeString(), "rightText": model.toString()},
      timeBlockPlace: model.place != null && model.place!.id != null ? TimeBlockPlace.fromPlaceModel(model.place!) : null,
    );
  }

  factory TimeBlockItem.fromEventModelAsChild(EventModel model) {
    return TimeBlockItem(
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      id: model.id!,
      data: {"leftText": model.durationTimeString(), "rightText": model.toString()},
      timeBlockPlace: null,
    );
  }

  factory TimeBlockItem.forCompanion(EventModel model) {
    return TimeBlockItem(
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockType.signedIn,
      id: model.id!,
      data: {"leftText": model.durationTimeString(), "rightText": model.toString()},
    );
  }
}