import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';

class TimeHelper {
  static DateTime? currentTime;

  static void Function()? toggleTimeTravel;

  static DateTime now(){
    if(currentTime != null){
      return currentTime!;
    }
    return DateTime.now();
  }

  static int getTimeNowIndexFromDays(Iterable<int> weekdays) {
    var index = weekdays.toList().indexOf(now().weekday);
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

  static Future<TimeOfDay?> showUniversalTimePicker({
    required BuildContext context,
    required TimeOfDay initialTime,
    TimePickerEntryMode initialEntryMode = TimePickerEntryMode.dial,
  }) async {
    return await showTimePicker(
      context: context,
      initialTime: initialTime,
      initialEntryMode: initialEntryMode,
      builder: (BuildContext context, Widget? child) {
        return MediaQuery(
          data: MediaQuery.of(context).copyWith(alwaysUse24HourFormat: true),
          child: child!,
        );
      },
    );
  }

  static String getMinimalisticDateRange(BuildContext context, DateTime start, DateTime end) {
    final locale = Localizations.localeOf(context).languageCode;
    final fullEnd = DateFormat.yMMMd(locale).format(end);
    String minimalStart;

    if (start.year == end.year) {
      if (start.month == end.month) {
        // Same month & year: show only the day for the start date.
        minimalStart = DateFormat.d(locale).format(start);
      } else {
        // Same year but different months: show day and abbreviated month for start.
        minimalStart = DateFormat.MMMd(locale).format(start);
      }
    } else {
      // Different years: show full formatted start date.
      minimalStart = DateFormat.yMMMd(locale).format(start);
    }

    return '$minimalStart - $fullEnd';
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
      const int offsetHours = AppConfig.offsetHours;
      return add(const Duration(hours: offsetHours)).toLocal();
    }
    return toLocal();
  }

  String weekdayToString(BuildContext context) {
    return DateFormat("EEEE", context.locale.languageCode).format(this);
  }
}