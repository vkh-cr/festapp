import 'package:fstapp/models/EventModel.dart';
import 'package:fstapp/services/ScheduleTimelineHelper.dart';

class CompanionModel {
  final String id;
  final String name;
  List<int> eventIds;
  List<EventModel>? schedule = [];
  List<TimeLineItem> dots = [];

  CompanionModel({required this.id, required this.name, required this.eventIds});

  factory CompanionModel.fromJson(Map<String, dynamic> json){
    return CompanionModel(
        id: json["id"],
        name: json["name"],
        eventIds: json["event_ids"] != null ? List<int>.from(json["event_ids"]) : []);
  }

  Map toJson() =>
  {
    "id": id,
    "name": name,
    "event_ids": eventIds
  };

  bool isSignedIn(int event) => eventIds.any((e)=> e == event);
}