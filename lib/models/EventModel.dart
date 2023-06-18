import 'package:intl/intl.dart';

class EventModel {
  String startTimeString() => DateFormat.Hm().format(startTime!);
  String durationString() => startTime != null && endTime != null ? "${DateFormat("EEEE, MMM d, HH:mm", "cs").format(startTime!)} - ${DateFormat.Hm().format(endTime!)}" : "";

  int? maxParticipants;

  int id;
  int? currentParticipants;

  EventModel(this.id);

  EventModel.fromJson(this.id, dynamic fromJson)
  {
    startTime = DateTime.parse(fromJson["start_time"]);
    endTime = DateTime.parse(fromJson["end_time"]);
    id = fromJson["id"];
    title = fromJson["title"];
    description = fromJson["description"];
    maxParticipants = fromJson["max_participants"];
  }

  String? title = "událost";
  String? description = "";
  bool isSignedIn = false;
  DateTime? startTime;
  DateTime? endTime;

  bool isFull() => currentParticipants!>=maxParticipants!;
  bool canSignIn() => maxParticipants!=null;

  @override
  String toString() {
    return (maxParticipants==null ? title:"$title (${currentParticipants??"-"}/$maxParticipants)")??"";
  }
}