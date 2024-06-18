class TimeHelper {
  static DateTime Now(){
    return DateTime(2024,6,21,15,15,0).toLocal();
    //return DateTime.now();
  }

}

extension DateTimeExtension on DateTime {
  DateTime roundDown({Duration delta = const Duration(hours: 1)}) {
    return DateTime.fromMillisecondsSinceEpoch(
        millisecondsSinceEpoch - millisecondsSinceEpoch % delta.inMilliseconds, isUtc: isUtc);
  }
  DateTime roundUp({Duration delta = const Duration(hours: 1)}) {
    int mod = millisecondsSinceEpoch % delta.inMilliseconds;
    if (mod == 0) {
      return this;
    } else {
      return DateTime.fromMillisecondsSinceEpoch(
          millisecondsSinceEpoch - mod + delta.inMilliseconds,
          isUtc: isUtc
      );
    }
  }
  double get hourInDouble {
    return hour + minute / 60.0 + second / 3600.0;
  }
}