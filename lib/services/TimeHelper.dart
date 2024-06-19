import 'package:fstapp/appConfig.dart';

class TimeHelper {
  static DateTime? currentTime;

  static void Function()? toggleTimeTravel;


  static DateTime now(){
    if(currentTime != null){
      return currentTime!;
    }
    return DateTime.now();
  }

  static int getIndexFromDays(List<int> weekdays) {
    var index = weekdays.indexOf(now().weekday);
    if(index == -1) {
      return 0;
    }
    return index;
  }

  static double differenceInHours(DateTime start, DateTime end) {
    int differenceInMillis = end.difference(start).inMilliseconds;
    double hoursDifference = differenceInMillis / (1000 * 60 * 60);
    return hoursDifference;
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

  DateTime eventLocalTime() {
    if(AppConfig.isEventTimeUtc && isUtc) {
      const int offsetHours = -2;
      return add(const Duration(hours: offsetHours)).toLocal();
    }
    return toLocal();
  }
}