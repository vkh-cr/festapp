import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/models/EventModel.dart';
import 'package:fstapp/models/Tb.dart';
import 'package:fstapp/services/TimeHelper.dart';

class TimetableItem {
  DateTime startTime;
  DateTime endTime;
  String text;
  TimetableItemType itemType;
  String? eventType;
  int placeId;
  int id;

  TimetableItem(
      {required this.itemType,
        required this.startTime,
        required this.endTime,
        required this.text,
        required this.eventType,
        required this.placeId,
        required this.id});

  static TimetableItemType getIndicatorFromEvent(EventModel model) {
    if (model.isSignedIn) {
      return TimetableItemType.signedIn;
    } else if (model.isEventInMySchedule == true) {
      return TimetableItemType.saved;
    } else if (model.isGroupEvent && model.isMyGroupEvent) {
      return TimetableItemType.signedIn;
    } else if (model.currentParticipants != null &&
        model.maxParticipants != null &&
        (!DataService.isLoggedIn() || model.isFull())) {
      return TimetableItemType.nothing;
    } else if (EventModel.isEventSupportingSignIn(model)) {
      return TimetableItemType.nothing;
    }
    return TimetableItemType.canSave;
  }

  static bool? getTimetableItemTypeAsCanSignIn(TimetableItemType type) {
    if (type == TimetableItemType.nothing || type == TimetableItemType.signedIn) {
      return null;
    } else if (type == TimetableItemType.canSave) {
      return true;
    }
    return false;
  }

  factory TimetableItem.fromEventModel(EventModel model) {
    return TimetableItem(
      startTime: model.startTime.eventLocalTime(),
      endTime: model.endTime.eventLocalTime(),
      itemType: getIndicatorFromEvent(model),
      id: model.id!,
      text: model.toString(),
      eventType: model.type,
      placeId: model.place!.id!,
    );
  }
}

enum TimetableItemType { saved, canSave, nothing, signedIn }

class TimetablePlace {
  String title;
  int id;

  TimetablePlace({required this.title, required this.id});

  factory TimetablePlace.fromJson(Map<String, dynamic> json) {
    return TimetablePlace(
      id: json[Tb.places.id],
      title: json[Tb.places.title],
    );
  }
}