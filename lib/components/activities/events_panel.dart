// events_panel.dart
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/activity_model.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:intl/intl.dart';
import 'activities_component_strings.dart';
import 'activity_timeline_controller.dart';

class EventsPanel extends StatelessWidget {
  final ActivityTimelineController controller;

  const EventsPanel({
    Key? key,
    required this.controller,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final normalizedFilter =
    Utilities.removeDiacritics(controller.eventFilter.toLowerCase());
    final filtered = controller.allEvents
        .where((e) => Utilities.removeDiacritics(
        (e.title ?? "").toLowerCase())
        .contains(normalizedFilter))
        .toList()
      ..sort((a, b) => a.startTime.compareTo(b.startTime));
    final hintColor = controller.hintColor;
    final textColor = controller.textColor;
    final chipBgColor =
    controller.isDark ? Colors.orange[800] : Colors.orange[100];
    final chipTextColor =
    controller.isDark ? Colors.white.withOpacity(0.9) : Colors.black87;

    return Container(
      padding: const EdgeInsets.all(2),
      color: controller.isDark ? Colors.grey[850] : Colors.grey[100],
      child: Column(children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 2),
          child: TextField(
            style: TextStyle(fontSize: 12, color: textColor),
            decoration: InputDecoration(
              hintText: ActivitiesComponentStrings.hintSearchEvents,
              hintStyle: TextStyle(color: hintColor, fontSize: 12),
              isDense: true,
              alignLabelWithHint: true,
              prefixIcon: Padding(
                padding: const EdgeInsets.only(left: 8, right: 4),
                child: Icon(Icons.search, size: 14, color: hintColor),
              ),
              prefixIconConstraints:
              const BoxConstraints(minWidth: 24, minHeight: 24),
              contentPadding: const EdgeInsets.symmetric(vertical: 6),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide.none,
              ),
              filled: true,
              fillColor: Colors.transparent,
            ),
            onChanged: controller.onEventFilterChanged,
          ),
        ),
        Expanded(
          child: SingleChildScrollView(
            child: Wrap(
              spacing: 4,
              runSpacing: 4,
              children: filtered.map((e) {
                // Format the start time to show weekday and time, e.g., "Sat 14:30"
                final locale = Localizations.localeOf(context).toString();
                final formattedTime =
                DateFormat('E HH:mm', locale).format(e.startTime);

                return Draggable<ActivityEventModel>(
                  data: e,
                  onDragStarted: controller.hideAssignmentDetailOverlay,
                  feedback: Material(
                    elevation: 4.0,
                    color: Colors.transparent,
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 12, vertical: 6),
                      decoration: BoxDecoration(
                        color: chipBgColor?.withOpacity(0.9),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            e.title ?? ActivitiesComponentStrings.textUnnamedEvent,
                            style: TextStyle(
                                fontSize: 12,
                                color: chipTextColor,
                                fontWeight: FontWeight.bold),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            formattedTime,
                            style: TextStyle(
                                fontSize: 11,
                                color: chipTextColor.withOpacity(0.8)),
                          ),
                        ],
                      ),
                    ),
                  ),
                  child: Chip(
                    backgroundColor: chipBgColor,
                    padding:
                    const EdgeInsets.symmetric(horizontal: 6, vertical: 5),
                    label: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                            e.title ??
                                ActivitiesComponentStrings.textUnnamedEvent,
                            style: TextStyle(
                                fontSize: 11,
                                color: chipTextColor,
                                fontWeight: FontWeight.bold)),
                        Text(formattedTime,
                            style: TextStyle(
                                fontSize: 10,
                                color: chipTextColor.withOpacity(0.8))),
                      ],
                    ),
                    materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                  ),
                );
              }).toList(),
            ),
          ),
        ),
      ]),
    );
  }
}
