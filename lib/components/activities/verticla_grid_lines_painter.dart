import 'dart:math' as math;
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class VerticalGridLinesPainter extends CustomPainter {
  final DateTime start, end;
  final double pps; // Pixels per second
  final double viewHeight; // The height of the area this painter is drawing into (e.g., 24 for activity header, 20 for user row)
  final bool isDarkMode;

  VerticalGridLinesPainter({
    required this.start,
    required this.end,
    required this.pps,
    required this.viewHeight,
    required this.isDarkMode,
  });

  @override
  void paint(Canvas canvas, Size size) { // size.width SHOULD be the full timelineWidth
    final Paint linePaint = Paint();
    final Color daySeparatorColor = isDarkMode ? Colors.blueGrey.shade700.withOpacity(0.6) : Colors.blueGrey.shade400.withOpacity(0.6);
    final Color hourLineColor = isDarkMode ? Colors.white12 : Colors.black12;
    final Color subHourLineColor = isDarkMode ? Colors.white10.withOpacity(0.7) : Colors.black12.withOpacity(0.7);

    if (pps <= 0 || this.start.isAtSameMomentAs(this.end) || this.start.isAfter(this.end)) {
      // Avoid drawing or errors if parameters are invalid
      return;
    }

    // Determine tick interval based on zoom (pps) - mirrors _TimelinePainter logic for consistency
    Duration tickInterval = const Duration(hours: 1);
    bool show30MinTicks = pps * 1800 > 30; // Thresholds can be fine-tuned
    bool show15MinTicks = pps * 900 > 25;
    bool show5MinTicks = pps * 300 > 20;

    if (show5MinTicks) tickInterval = const Duration(minutes: 5);
    else if (show15MinTicks) tickInterval = const Duration(minutes: 15);
    else if (show30MinTicks) tickInterval = const Duration(minutes: 30);

    DateTime currentTickTime = this.start.subtract(Duration( // Align to previous tick interval before start
        minutes: this.start.minute % tickInterval.inMinutes,
        seconds: this.start.second,
        milliseconds: this.start.millisecond,
        microseconds: this.start.microsecond));
    if (currentTickTime.isBefore(this.start)) { // Ensure first tick is at or after start
      currentTickTime = currentTickTime.add(tickInterval);
    }

    // Calculate the full logical width based on the painter's own start, end, and pps.
    // This can be used as an optimization for the loop break if needed,
    // but draw calls will be made for all dx regardless of size.width.
    final double calculatedFullLogicalWidth = (this.end.difference(this.start).inSeconds) * this.pps;


    // Iterate for every tick within the logical start/end of the timeline
    while (currentTickTime.isBefore(this.end) || currentTickTime.isAtSameMomentAs(this.end)) {
      final double dx = currentTickTime.difference(this.start).inSeconds * pps;

      bool isHourTick = currentTickTime.minute == 0;
      bool isMidnight = isHourTick && currentTickTime.hour == 0;
      bool isHalfHourTick = !isHourTick && currentTickTime.minute == 30;
      bool isQuarterHourTick = !isHourTick && !isHalfHourTick && (currentTickTime.minute == 15 || currentTickTime.minute == 45);

      // Determine line style based on tick significance
      if (isMidnight) {
        linePaint.color = daySeparatorColor;
        linePaint.strokeWidth = 0.8;
      } else if (isHourTick) {
        linePaint.color = hourLineColor;
        linePaint.strokeWidth = 0.6;
      } else if (show30MinTicks && isHalfHourTick) {
        linePaint.color = subHourLineColor;
        linePaint.strokeWidth = 0.5;
      } else if (show15MinTicks && isQuarterHourTick) {
        linePaint.color = subHourLineColor;
        linePaint.strokeWidth = 0.5;
      } else if (show5MinTicks) { // Other 5-minute intervals
        linePaint.color = subHourLineColor;
        linePaint.strokeWidth = 0.4;
      } else {
        currentTickTime = currentTickTime.add(tickInterval); // Move to next potential tick
        if (dx >= calculatedFullLogicalWidth && calculatedFullLogicalWidth > 0) break; // Optimization
        continue; // Skip if no display rule matched for this interval
      }

      // Draw ALL logical vertical tick lines at their calculated 'dx'.
      // The underlying canvas (limited by CustomPaint's size) and the parent ClipRect will handle clipping.
      canvas.drawLine(Offset(dx, 0), Offset(dx, viewHeight), linePaint);

      currentTickTime = currentTickTime.add(tickInterval); // Advance to the next tick time
      // Optimization: if the current dx is already beyond the calculated full logical width,
      // no need to process further ticks.
      if (dx >= calculatedFullLogicalWidth && calculatedFullLogicalWidth > 0) break;
    }
  }

  @override
  bool shouldRepaint(covariant VerticalGridLinesPainter oldDelegate) {
    return oldDelegate.start != start ||
        oldDelegate.end != end ||
        oldDelegate.pps != pps ||
        oldDelegate.viewHeight != viewHeight ||
        oldDelegate.isDarkMode != isDarkMode;
  }
}