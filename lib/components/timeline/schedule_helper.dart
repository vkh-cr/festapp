// schedule_helper.dart
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/services/time_helper.dart';

/// Determines available actions/state for an event.
enum TimeBlockType {
  saved,       // already saved to user's program
  canSave,     // can be saved to program
  noAction,    // no actions available
  signedIn,    // user is signed in
  isFull,      // event full
  canSignIn,   // can sign in
  activity,   // can sign in
}

/// Represents an optional place or "track" for splitting.
class TimeBlockPlace {
  final int id;
  final String title;
  final int? order;

  TimeBlockPlace({required this.id, required this.title, required this.order});

  factory TimeBlockPlace.fromPlaceModel(PlaceModel place) {
    return TimeBlockPlace(
      id: place.id!,
      title: place.title ?? '---',
      order: place.order,
    );
  }
}

/// A group of time blocks, e.g. by place or time of day.
class TimeBlockGroup {
  final String title;
  final DateTime? dateTime;
  final List<TimeBlockItem> events;

  TimeBlockGroup({required this.title, required this.events, this.dateTime});
}

/// A single time-block entry, now supporting nested child blocks.
class TimeBlockItem {
  DateTime startTime;
  DateTime endTime;
  TimeBlockType timeBlockType;
  dynamic data;
  String? description;
  final int id;
  TimeBlockPlace? timeBlockPlace;
  String? eventType;
  final String title;
  final int participants;
  final int maxParticipants;
  final String? imageUrl;
  final bool isCancelled;
  /// Nested child time blocks
  List<TimeBlockItem>? children;


  TimeBlockItem({
    required this.id,
    required this.startTime,
    required this.endTime,
    required this.timeBlockType,
    this.data,
    this.description,
    this.timeBlockPlace,
    this.eventType,
    this.title = '',
    this.participants = 0,
    this.maxParticipants = 0,
    this.children,
    this.imageUrl,
    this.isCancelled = false, // Added default
  });

  /// Duration of the block.
  Duration duration() => startTime.isBefore(endTime)
      ? DateTimeRange(start: startTime, end: endTime).duration
      : Duration.zero;

  String durationString() {
    final d = duration();
    return '${d.inHours}h ${d.inMinutes.remainder(60)}m';
  }

  bool isSignedIn() => timeBlockType == TimeBlockType.signedIn;
  bool isInMySchedule() => timeBlockType == TimeBlockType.saved;
  bool haveChildren() => children?.isNotEmpty ?? false;
  bool isSupportingSignIn() => !isCancelled && maxParticipants > 0;

  String durationTimeString() => "${DateFormat.Hm().format(startTime)} - ${DateFormat.Hm().format(endTime)}";

  /// Factory from EventModel for table view (old usage).
  factory TimeBlockItem.fromEventModelForTimeTable(EventModel model) {
    return TimeBlockItem(
      id: model.id!,
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      data: model.toString(),
      eventType: model.type,
      timeBlockPlace: model.place != null && model.place!.id != null
          ? TimeBlockPlace.fromPlaceModel(model.place!)
          : null,
      title: model.title!,
      participants: model.currentParticipants ?? 0,
      maxParticipants: model.maxParticipants ?? 0,
      children: model.childEvents
          .map((c) => TimeBlockItem.fromEventModelAsChild(c))
          .toList(),
      isCancelled: model.isCancelled, // Added
    );
  }

  /// Factory from EventModel for schedule timeline (new usage).
  factory TimeBlockItem.fromEventModelTimeline(EventModel model) {
    return TimeBlockItem(
      id: model.id!,
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      data: {
        "leftText": model.startTimeString(),
        "rightText": model.toString()
      },
      timeBlockPlace: model.place != null && model.place!.id != null
          ? TimeBlockPlace.fromPlaceModel(model.place!)
          : null,
      isCancelled: model.isCancelled, // Added
    );
  }

  factory TimeBlockItem.fromEventModel(EventModel model) {
    return TimeBlockItem(
      id: model.id!,
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      data: model.toString(),
      description: model.description,
      eventType: model.type,
      timeBlockPlace: model.place != null && model.place!.id != null
          ? TimeBlockPlace.fromPlaceModel(model.place!)
          : null,
      title: model.title!,
      participants: model.currentParticipants ?? 0,
      maxParticipants: model.maxParticipants ?? 0,
      children: model.childEvents.map((c) => TimeBlockItem.fromEventModelAsChild(c))
          .toList(),
      imageUrl:  model.data?[Tb.events.dataHeaderImage],
      isCancelled: model.isCancelled, // Added
    );
  }

  /// Factory from EventModel as a child event.
  factory TimeBlockItem.fromEventModelAsChild(EventModel model) {
    return TimeBlockItem(
      id: model.id!,
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      data: {
        "leftText": model.durationTimeString(),
        "rightText": model.toString()
      },
      timeBlockPlace: null,
      isCancelled: model.isCancelled, // Added
    );
  }

  /// Factory for companion entries.
  factory TimeBlockItem.forCompanion(EventModel model) {
    return TimeBlockItem(
      id: model.id!,
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockType.signedIn,
      data: {
        "leftText": model.durationTimeString(),
        "rightText": model.toString()
      },
      isCancelled: model.isCancelled, // Added
    );
  }
}

/// Helper class for splitting/time-block typing.
class TimeBlockHelper {
  static TimeBlockType getTimeBlockTypeFromModel(EventModel model) {
    if (model.isSignedIn!) {
      return TimeBlockType.signedIn;
    } else if (model.isEventInMySchedule == true && !EventModel.isEventSupportingSignIn(model)) {
      return TimeBlockType.saved;
    } else if (model.isGroupEvent!) {
      if (model.isMyGroupEvent!) {
        return TimeBlockType.signedIn;
      }
      return TimeBlockType.noAction;
    } else if (EventModel.isEventSupportingSignIn(model) &&
        model.isFull()) {
      return TimeBlockType.isFull;
    } else if (EventModel.isEventSupportingSignIn(model)) {
      return TimeBlockType.canSignIn;
    } else if(model.canSaveEventToMyProgram() == true){
      return TimeBlockType.canSave;
    }
    return TimeBlockType.noAction;
  }

  static List<TimeBlockGroup> splitTimeBlockByPlace(
      Iterable<TimeBlockItem> events) {
    Map<int?, List<TimeBlockItem>> grouped = {};
    for (var event in events) {
      grouped.putIfAbsent(event.timeBlockPlace?.id, () => []).add(event);
    }
    var groups = grouped.entries.map((entry) {
      var place = entry.value.first.timeBlockPlace;
      return TimeBlockGroup(
        title: place?.title ?? '',
        events: entry.value,
      );
    }).toList();
    groups.sort((a, b) {
      var oa = a.events.first.timeBlockPlace?.order ?? double.maxFinite.toInt();
      var ob = b.events.first.timeBlockPlace?.order ?? double.maxFinite.toInt();
      return oa.compareTo(ob);
    });
    return groups;
  }

  static List<TimeBlockGroup> splitTimeBlocksByDay(
      Iterable<TimeBlockItem> events, BuildContext context) {
    Map<String, List<TimeBlockItem>> map = {};
    for (var e in events) {
      var day = DateFormat("EEEE d. MMMM ", context.locale.languageCode)
          .format(e.startTime);
      day = day[0].toUpperCase() + day.substring(1);
      map.putIfAbsent(day, () => []).add(e);
    }
    return map.entries.map((en) {
      return TimeBlockGroup(title: en.key, events: en.value);
    }).toList();
  }

  static List<TimeBlockGroup> splitTimeBlocks(
      Iterable<TimeBlockItem> events) {
    if (AppConfig.isSplitByPlace) {
      return splitTimeBlockByPlace(
          events.where((e) => e.timeBlockPlace != null));
    } else {
      return splitTimeBlocksByTimeOfDay(events);
    }
  }

  static List<TimeBlockGroup> splitTimeBlocksByDate(
      List<TimeBlockItem> events, BuildContext context, int splitHour) {
    List<TimeBlockGroup> toReturn = [];
    if (events.isEmpty) return toReturn;
    var fromD = events.first.startTime.subtract(const Duration(days: 1));
    var fromDate = DateTime(fromD.year, fromD.month, fromD.day);
    var tested = fromDate.add(Duration(hours: splitHour));
    while (!tested.isAfter(events.last.startTime)) {
      var next = tested.add(const Duration(days: 1));
      var focused = events.where((e) =>
      e.startTime.isAfter(tested) && e.startTime.isBefore(next) ||
          e.startTime.isAtSameMomentAs(next)).toList();
      if (focused.isNotEmpty) {
        toReturn.add(TimeBlockGroup(
          title: focused.first.startTime.weekdayToString(context),
          events: focused,
          dateTime: tested,
        ));
      }
      tested = next;
    }
    return toReturn;
  }

  static List<TimeBlockGroup> splitTimeBlocksByTimeOfDay(
      Iterable<TimeBlockItem> events) {
    List<TimeBlockItem> morning =
    events.where((e) => e.startTime.hour <= 12).toList();
    List<TimeBlockItem> afternoon = events
        .where((e) => e.startTime.hour > 12 && e.startTime.hour < 18)
        .toList();
    List<TimeBlockItem> evening =
    events.where((e) => e.startTime.hour >= 18).toList();

    bool multi = [morning, afternoon, evening]
        .where((g) => g.isNotEmpty)
        .length >
        1;
    TimeBlockGroup make(String t, List<TimeBlockItem> ev) =>
        TimeBlockGroup(title: multi ? t.tr() : '', events: ev);

    return [
      make('', morning),
      if (afternoon.isNotEmpty) make('Afternoon', afternoon),
      if (evening.isNotEmpty) make('Evening', evening),
    ];
  }

  static bool? getTimetableItemTypeAsCanSignIn(TimeBlockType type) {
    if (type == TimeBlockType.canSave) return true;
    if (type == TimeBlockType.saved) return false;
    return null;
  }
}