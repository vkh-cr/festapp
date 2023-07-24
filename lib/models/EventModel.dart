import 'package:av_app/models/PlaceModel.dart';
import 'package:intl/intl.dart';

class EventModel {

  String startTimeString() => DateFormat.Hm().format(startTime);
  String durationString() => "${DateFormat("EEEE, MMM d, HH:mm", "cs").format(startTime)} - ${DateFormat.Hm().format(endTime)}";

  int? maxParticipants;

  final int id;
  PlaceModel? place;
  int? currentParticipants;
  String? title = "událost";
  String? description = "";
  bool isSignedIn = false;
  DateTime startTime;
  DateTime endTime;

  EventModel({
    required this.startTime,
    required this.endTime,
    required this.id,
    this.title,
    this.description,
    this.maxParticipants,
    this.place});

  factory EventModel.fromJson(Map<String, dynamic> json) => EventModel(
      startTime: DateTime.parse(json["start_time"]),
      endTime: DateTime.parse(json["end_time"]),
      id: json["id"],
      title: json.containsKey("title") ? json["title"] : null,
      description: json.containsKey("description") ? json["description"] : null,
      maxParticipants: json.containsKey("max_participants") ? json["max_participants"] : null,
      place: json.containsKey("places") && json["places"] != null ? PlaceModel.fromJson(json["places"]) : null
  );

  bool isFull() => currentParticipants !>= maxParticipants!;
  static bool canSignIn(EventModel? event) => event != null && event.maxParticipants != null;

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
