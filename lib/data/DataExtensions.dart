import 'package:festapp/models/EventModel.dart';
import 'package:festapp/models/InformationModel.dart';

extension DataExtensions on List<EventModel> {
  List<EventModel> filterRootEvents() {
    List<EventModel> filtered = [];
    var children = where((element) => element.childEventIds!=null)
        .expand((element) => element.childEventIds!).toList();
    for(var e in where((element) => !children.contains(element.id!)))
    {
      filtered.add(e);
    }
    return filtered;
  }

  List<EventModel> timetableEventsFilter(int minimalDurationMinutes) {
    return filterRootEvents()
        .where((e) => e.place?.id != null)
        .where((element) => element.duration().inMinutes>=minimalDurationMinutes)
        .toList();
  }
}

extension InfoExtensions on List<InformationModel> {
  List<InformationModel> filterByType(String? type) {
    if(type?.isEmpty??true)
    {
      return where((element) => element.type?.isEmpty??true).toList();
    }
    return where((element) => element.type == type).toList();
  }
}