import 'package:flutter/material.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:intl/intl.dart';

class TimelineWidget extends StatelessWidget {
  final DateTime startTime;
  final DateTime endTime;
  final int hourCount;
  final double pixelsInHour;
  final double timelineHeight;

  const TimelineWidget({
    super.key,
    required this.startTime,
    required this.endTime,
    required this.hourCount,
    required this.pixelsInHour,
    required this.timelineHeight,
  });

  @override
  Widget build(BuildContext context) {
    DateFormat timeFormat = DateFormat("H:mm");
    var now = TimeHelper.now(); // Assuming TimeHelper.Now() returns current time
    return Stack(
      children: [
        ...List<Widget>.generate(hourCount + 1, (i) {
          var hour = startTime.hour + i;
          if (hour > 23) {
            hour -= 24;
          }
          return Padding(
            padding: EdgeInsets.fromLTRB(
                i == 0 ? 0 : i * pixelsInHour - pixelsInHour / 2, 0, 0, 0),
            child: Container(
              color: ThemeConfig.timetableTimeLineColor,
              height: timelineHeight,
              width: (i == hourCount || i == 0)
                  ? pixelsInHour / 2
                  : pixelsInHour,
              alignment: i == 0
                  ? Alignment.centerLeft
                  : i == hourCount
                  ? Alignment.centerRight
                  : Alignment.center,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                  "$hour:00",
                  style: TextStyle(color: ThemeConfig.upperNavText(context)),
                ),
              ),
            ),
          );
        }),
        if (now.isAfter(startTime) && now.isBefore(endTime))
          Padding(
            padding: EdgeInsets.fromLTRB(
                TimeHelper.differenceInHours(startTime, now) * pixelsInHour - 50,
                timelineHeight + 6, 0, 0), // Adjust the horizontal position as needed
            child: SizedBox(
              width: 100,
              child: Center(
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
                  decoration: BoxDecoration(
                    color: ThemeConfig.timetableTimeSplitColor,
                    //border: Border.all(color: AppConfig.timetableTimeSplitColor, width: 2),
                    borderRadius: BorderRadius.circular(5.0),
                    boxShadow: const [
                      BoxShadow(
                        color: Colors.black26,
                        blurRadius: 10,
                        offset: Offset(0, 4),
                      ),
                    ],
                  ),
                  child: Text(
                    timeFormat.format(now),
                    style: TextStyle(color: Theme.of(context).colorScheme.onSurface, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ),
          ),
      ],
    );
  }
}