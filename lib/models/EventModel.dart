import 'package:av_app/models/PlaceModel.dart';
import 'package:intl/intl.dart';

class EventModel {

  String startTimeString() => DateFormat.Hm().format(startTime!);
  String durationString() => startTime != null && endTime != null ? "${DateFormat("EEEE, MMM d, HH:mm", "cs").format(startTime!)} - ${DateFormat.Hm().format(endTime!)}" : "";

  int? maxParticipants;

  final int id;
  PlaceModel? place;
  int? currentParticipants;
  String? title = "událost";
  String? description = "";
  bool isSignedIn = false;
  DateTime? startTime;
  DateTime? endTime;

  EventModel({
    this.startTime,
    this.endTime,
    required this.id,
    this.title,
    this.description,
    this.maxParticipants,
    this.place});

  factory EventModel.fromJson(Map<String, dynamic> fromJson) => EventModel(
      startTime: DateTime.parse(fromJson["start_time"]),
      endTime: DateTime.parse(fromJson["end_time"]),
      id: fromJson["id"],
      title: fromJson["title"],
      description: fromJson["description"],
      maxParticipants: fromJson["max_participants"],
      place: fromJson.containsKey("places") && fromJson["places"] != null ? PlaceModel.fromJson(fromJson["places"]) : null
  );

  bool isFull() => currentParticipants !>= maxParticipants!;
  bool canSignIn() => maxParticipants != null;

  @override
  String toString() {
    return (maxParticipants==null ? title:"$title (${currentParticipants??"-"}/$maxParticipants)")??"";
  }

  copyFromEvent(EventModel event)
  {
    startTime = event.startTime;
    endTime = event.endTime;
    title = event.title;
    description = event.description;
    maxParticipants = event.maxParticipants;
  }
}
