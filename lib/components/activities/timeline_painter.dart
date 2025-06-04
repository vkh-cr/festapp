// timeline_painter.dart
import 'dart:math' as math;
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/services/time_helper.dart';
import 'activities_component_strings.dart'; // Import the strings file

class TimelinePainter extends CustomPainter {
  final DateTime start, end;
  final double pps; // Pixels per second
  final bool isDarkMode;
  // NOTE: Ideally, fetch these from system locale using the `intl` package.
  // Using static English abbreviations for now as per component strings file.
  final List<String> weekdays;
  final List<String> monthAbbreviations;
  final double dateHeaderHeight;
  final double timeTickAreaHeight;

  TimelinePainter({
    required this.start,
    required this.end,
    required this.pps,
    required this.isDarkMode,
    required this.weekdays,
    required this.monthAbbreviations, // Use the list from strings file
    required this.dateHeaderHeight,
    required this.timeTickAreaHeight,
  });

  @override
  void paint(Canvas canvas, Size size) { // size.width SHOULD be calculatedFullLogicalWidth
    final Paint linePaint = Paint()..strokeWidth = 1.0;
    final TextPainter textPainter = TextPainter(textDirection: TextDirection.ltr);

    final Color primaryTextColor = isDarkMode ? Colors.white : Colors.black87;
    final Color secondaryTextColor = isDarkMode ? Colors.white70 : Colors.black54;
    final Color linePrimaryColor = isDarkMode ? Colors.white54 : Colors.black54;
    final Color lineSecondaryColor = isDarkMode ? Colors.white38 : Colors.black26;
    final Color lineTertiaryColor = isDarkMode ? Colors.white24 : Colors.black12;
    final Color daySeparatorColor = isDarkMode ? Colors.blueGrey.shade600 : Colors.blueGrey.shade300;
    final Color weekendBgColor = isDarkMode ? Colors.grey.shade800.withOpacity(0.3) : Colors.grey.shade200.withOpacity(0.5);


    if (pps <= 0 || start.isAtSameMomentAs(end) || start.isAfter(end)) {
      canvas.drawLine(Offset(0, dateHeaderHeight - 0.5), Offset(size.width, dateHeaderHeight - 0.5), linePaint..color = daySeparatorColor);
      canvas.drawLine(Offset(0, dateHeaderHeight + timeTickAreaHeight -1), Offset(size.width, dateHeaderHeight + timeTickAreaHeight -1), linePaint..color = linePrimaryColor);
      return;
    }

    final double calculatedFullLogicalWidth = (end.difference(start).inSeconds) * pps;

    // --- 1. Draw Date Header ---
    DateTime currentDayIter = DateTime(start.year, start.month, start.day).toOccasionTime();
    double iterDayStartX = currentDayIter.difference(start).inSeconds * pps;

    // Adjust if currentDayIter (midnight) is before the actual timeline start time (e.g. 10 AM)
    if (iterDayStartX < 0 && currentDayIter.add(const Duration(days:1)).isAfter(start)) {
      // No specific adjustment needed here for label logic, iterDayStartX correctly reflects the logical start.
    }

    canvas.save();
    canvas.clipRect(Rect.fromLTWH(0, 0, calculatedFullLogicalWidth, dateHeaderHeight));

    while (currentDayIter.isBefore(end)) {
      DateTime nextDayIter = currentDayIter.add(const Duration(days: 1));
      double iterDayEndX = nextDayIter.difference(start).inSeconds * pps;
      double logicalDayWidth = iterDayEndX - iterDayStartX;

      // Ensure iterDayEndX does not exceed the total logical width if the last day is partial.
      // This is particularly important if this.end is not at midnight.
      double effectiveIterDayEndX = math.min(iterDayEndX, calculatedFullLogicalWidth);
      logicalDayWidth = effectiveIterDayEndX - iterDayStartX;


      // Backgrounds (using painter's given canvas size.width for visible segment optimization)
      double drawBackgroundStartX = math.max(0, iterDayStartX);
      // Use effectiveIterDayEndX for background segment extent against logical width
      double drawBackgroundLogicalEndX = math.min(effectiveIterDayEndX, calculatedFullLogicalWidth);
      // Then intersect with visible canvas width (size.width)
      double drawBackgroundRenderEndX = math.min(drawBackgroundLogicalEndX, size.width);


      if (drawBackgroundStartX < drawBackgroundRenderEndX) {
        if (currentDayIter.weekday == DateTime.saturday || currentDayIter.weekday == DateTime.sunday) {
          canvas.drawRect(
            Rect.fromLTRB(drawBackgroundStartX, 0, drawBackgroundRenderEndX, dateHeaderHeight),
            Paint()..color = weekendBgColor,
          );
        }
      }

      String dayLabelStr = "${currentDayIter.day} ${weekdays[currentDayIter.weekday - 1]}";
      if (currentDayIter.day == 1 || iterDayStartX < 1.0) { // Show month if 1st or first day in timeline
        // Access month abbreviation from the passed list
        dayLabelStr = "${currentDayIter.day} ${monthAbbreviations[currentDayIter.month-1]}, ${weekdays[currentDayIter.weekday - 1]}";
      }
      textPainter.text = TextSpan(text: dayLabelStr, style: TextStyle(color: secondaryTextColor, fontSize: 10));
      textPainter.layout();

      double labelWidth = textPainter.width;
      double labelHeight = textPainter.height;
      double yPosLabel = (dateHeaderHeight - labelHeight) / 2;
      double xPaddingLabel = 5.0; // Padding around each label instance

      // New logic for potentially multiple labels per day:
      if (logicalDayWidth >= labelWidth + 2 * xPaddingLabel) {
        // If the day segment is wide enough for at least one label with padding.

        // Determine the distance between starts of repeated labels.
        // Try to place a label roughly every 200-300 pixels, but ensure enough space for the label itself.
        double preferredRepeatInterval = math.max(labelWidth + 40.0, 250.0); // At least 40px gap, or 250px total interval.

        double currentLabelX = iterDayStartX + xPaddingLabel;
        int labelsDrawnThisDay = 0;

        while (currentLabelX + labelWidth + xPaddingLabel <= effectiveIterDayEndX) {
          // Ensure we don't draw past the logical end of the day segment (effectiveIterDayEndX)
          // And also not past the overall calculatedFullLogicalWidth (implicitly handled by effectiveIterDayEndX)

          // Check if the label start is beyond the calculatedFullLogicalWidth to prevent drawing off-canvas logic.
          // The main canvas clipRect should handle this, but an early exit is good.
          if (currentLabelX >= calculatedFullLogicalWidth) break;

          textPainter.paint(canvas, Offset(currentLabelX, yPosLabel));
          labelsDrawnThisDay++;
          currentLabelX += preferredRepeatInterval;

          // Safety break for extremely high zoom or tiny pps values leading to huge loop counts
          if (labelsDrawnThisDay > 100 && pps < 0.001) break;
        }

        // If no labels were drawn by the loop (e.g., day is wide, but not enough for `preferredRepeatInterval` after first label)
        // and the initial condition (logicalDayWidth >= labelWidth + 2 * xPaddingLabel) was met,
        // it means at least one label should have been drawn. The loop structure ensures this.
        // The first label is drawn if `iterDayStartX + xPaddingLabel + labelWidth + xPaddingLabel <= effectiveIterDayEndX`.

      } else if (logicalDayWidth >= labelWidth) {
        // Day is not wide enough for padding on both sides, but can fit the label. Center it.
        double labelX = iterDayStartX + (logicalDayWidth - labelWidth) / 2;
        if (labelX >= calculatedFullLogicalWidth) { /* skip */ }
        else {
          textPainter.paint(canvas, Offset(labelX, yPosLabel));
        }
      }
      // If logicalDayWidth is less than labelWidth, no label is drawn for this day.

      // Day separator line
      // Only draw if the line itself is within the calculatedFullLogicalWidth
      if (iterDayStartX < calculatedFullLogicalWidth && iterDayStartX >= 0) { // Also ensure it's not before timeline start
        canvas.drawLine(Offset(iterDayStartX, 0), Offset(iterDayStartX, dateHeaderHeight), linePaint..color = daySeparatorColor);
      }


      iterDayStartX = iterDayEndX; // Use the original iterDayEndX for advancing
      currentDayIter = nextDayIter;
      if (iterDayStartX >= calculatedFullLogicalWidth && calculatedFullLogicalWidth > 0) break;
    }
    canvas.restore();

    canvas.drawLine(Offset(0, dateHeaderHeight - 0.5), Offset(calculatedFullLogicalWidth, dateHeaderHeight - 0.5), linePaint..color = daySeparatorColor);

    // --- 2. Draw Time Ticks and Labels ---
    // ... (rest of your time ticks drawing code) ...
    // The time tick logic seems fine as is regarding the user's request for date labels.
    final double timeTicksAreaTopY = dateHeaderHeight;
    final double mainLineY = timeTicksAreaTopY + timeTickAreaHeight - 1;

    canvas.drawLine(Offset(0, mainLineY), Offset(calculatedFullLogicalWidth, mainLineY), linePaint..color = linePrimaryColor);

    Duration tickInterval = const Duration(hours: 1);
    bool show30MinTicks = pps * 1800 > 35;
    bool show15MinTicks = pps * 900 > 30;
    bool show5MinTicks = pps * 300 > 25;

    if (show5MinTicks) tickInterval = const Duration(minutes: 5);
    else if (show15MinTicks) tickInterval = const Duration(minutes: 15);
    else if (show30MinTicks) tickInterval = const Duration(minutes: 30);

    DateTime currentTickTime = start.subtract(Duration(
        minutes: start.minute % tickInterval.inMinutes, seconds: start.second,
        milliseconds: start.millisecond, microseconds: start.microsecond));
    if (currentTickTime.isBefore(start)) {
      currentTickTime = currentTickTime.add(tickInterval);
    }

    canvas.save();
    canvas.clipRect(Rect.fromLTWH(0, timeTicksAreaTopY, calculatedFullLogicalWidth, timeTickAreaHeight));

    while (currentTickTime.isBefore(end) || currentTickTime.isAtSameMomentAs(end)) {
      final double dx = currentTickTime.difference(start).inSeconds * pps;
      if (dx >= calculatedFullLogicalWidth + 1 && calculatedFullLogicalWidth > 0) break; // Optimization: if dx is clearly out of bounds

      bool isHourTick = currentTickTime.minute == 0;
      bool isMidnight = isHourTick && currentTickTime.hour == 0;
      bool isHalfHourTick = !isHourTick && currentTickTime.minute == 30;
      bool isQuarterHourTick = !isHourTick && !isHalfHourTick && (currentTickTime.minute == 15 || currentTickTime.minute == 45);

      double tickHeightRatio; Color currentTickColor; bool drawLabel = false; int labelFontSize = 8; double textVerticalPadding = 1.5;

      if (isHourTick) {
        tickHeightRatio = isMidnight ? 0.40 : (currentTickTime.hour % 6 == 0 ? 0.30 : 0.20);
        currentTickColor = isMidnight ? daySeparatorColor : linePrimaryColor;
        drawLabel = true;
      } else if (show30MinTicks && isHalfHourTick) {
        tickHeightRatio = 0.18; currentTickColor = lineSecondaryColor;
        drawLabel = pps * 1800 > 70; // Show 30-min label if it has enough space (70px)
      } else if (show15MinTicks && isQuarterHourTick) {
        tickHeightRatio = 0.12; currentTickColor = lineTertiaryColor;
      } else if (show5MinTicks) { // 5-minute ticks (no labels usually)
        tickHeightRatio = 0.08; currentTickColor = lineTertiaryColor;
      } else { // This case should ideally not be hit if tickInterval is set correctly based on show flags
        currentTickTime = currentTickTime.add(tickInterval); continue;
      }

      double actualTickHeight = timeTickAreaHeight * tickHeightRatio;

      // Only draw if tick is within the logical width or very close to start
      if (dx >= -1 && dx <= calculatedFullLogicalWidth +1 ) { // Add a small tolerance for floating point issues
        canvas.drawLine(Offset(dx, mainLineY), Offset(dx, mainLineY - actualTickHeight), linePaint..color = currentTickColor);
      }


      if (drawLabel) {
        String labelStr = "${currentTickTime.hour.toString().padLeft(2, '0')}";
        if (currentTickTime.minute != 0) labelStr += ":${currentTickTime.minute.toString().padLeft(2, '0')}";

        textPainter.text = TextSpan(text: labelStr, style: TextStyle(color: (isHourTick && currentTickTime.hour == 0) ? primaryTextColor : secondaryTextColor, fontSize: labelFontSize.toDouble()));
        textPainter.layout();

        double labelTopY = mainLineY - actualTickHeight - textPainter.height - textVerticalPadding;
        double labelXPos = dx - textPainter.width / 2;

        if (labelTopY < timeTicksAreaTopY) labelTopY = timeTicksAreaTopY + textVerticalPadding; // Prevent label from going above tick area

        // Only draw if label is somewhat within the logical width
        if (labelXPos + textPainter.width >= -1 && labelXPos <= calculatedFullLogicalWidth +1) {
          textPainter.paint(canvas, Offset(labelXPos, labelTopY));
        }
      }
      currentTickTime = currentTickTime.add(tickInterval); // Advance to the next tick time
      // Optimization: if the current dx is already beyond the calculated full logical width,
      // no need to process further ticks.
      if (dx >= calculatedFullLogicalWidth && calculatedFullLogicalWidth > 0) break;
    }
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant TimelinePainter oldDelegate) {
    return oldDelegate.start != start || oldDelegate.end != end ||
        oldDelegate.pps != pps || oldDelegate.isDarkMode != isDarkMode ||
        !listEquals(oldDelegate.weekdays, weekdays) || // Added listEquals for weekdays
        !listEquals(oldDelegate.monthAbbreviations, monthAbbreviations) || // Added listEquals for month abbreviations
        oldDelegate.dateHeaderHeight != dateHeaderHeight ||
        oldDelegate.timeTickAreaHeight != timeTickAreaHeight;
  }

  // Helper for shouldRepaint if lists are used
  bool listEquals<T>(List<T>? a, List<T>? b) {
    if (a == null) return b == null;
    if (b == null || a.length != b.length) return false;
    for (int i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return false;
    }
    return true;
  }
}