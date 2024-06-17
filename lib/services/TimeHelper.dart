class TimeHelper {
  static DateTime Now(){
    return DateTime(2024,6,21,15,15,0);
    return DateTime.now();
  }

}

extension DateTimeExtension on DateTime {
  DateTime roundDown({Duration delta = const Duration(days: 1)}) {
    return DateTime.fromMillisecondsSinceEpoch(
        millisecondsSinceEpoch - millisecondsSinceEpoch % delta.inMilliseconds);
  }
  DateTime roundUp({Duration delta = const Duration(days: 1)}) {
    return DateTime.fromMillisecondsSinceEpoch(
        millisecondsSinceEpoch - millisecondsSinceEpoch % delta.inMilliseconds + delta.inMilliseconds);
  }
  double get hourInDouble {
    return hour + minute / 60.0 + second / 3600.0;
  }
  DateTime get correctForEvents {
    return add(const Duration(hours: 2));
  }
}