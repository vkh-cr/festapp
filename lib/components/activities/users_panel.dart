// users_panel.dart
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/activity_model.dart';
import 'activities_component_strings.dart';
import 'constants.dart'; // For darkUserColors
import 'activity_timeline_controller.dart';

class UsersPanel extends StatelessWidget {
  final ActivityTimelineController controller;

  const UsersPanel({
    Key? key,
    required this.controller,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final filtered = controller.allUsers
        .where((u) => u.toFullNameString().toLowerCase().contains(controller.userFilter.toLowerCase()))
        .toList();
    final hintColor = controller.hintColor; // Using controller's getter
    final textColor = controller.textColor; // Using controller's getter

    return Container(
      padding: const EdgeInsets.all(2),
      color: controller.isDark ? Colors.grey[850] : Colors.grey[100],
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.only(bottom: 2),
            child: TextField(
              style: TextStyle(fontSize: 12, color: textColor),
              decoration: InputDecoration(
                hintText: ActivitiesComponentStrings.hintSearchUsers,
                hintStyle: TextStyle(color: hintColor, fontSize: 12),
                isDense: true,
                alignLabelWithHint: true,
                prefixIcon: Padding(
                  padding: const EdgeInsets.only(left: 8, right: 4),
                  child: Icon(Icons.search, size: 14, color: hintColor),
                ),
                prefixIconConstraints: const BoxConstraints(minWidth: 24, minHeight: 24),
                contentPadding: const EdgeInsets.symmetric(vertical: 6),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: BorderSide.none,
                ),
                filled: true,
                fillColor: Colors.transparent,
              ),
              onChanged: controller.onUserFilterChanged,
            ),
          ),
          Expanded(
            child: GridView.builder(
              gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 60,
                mainAxisExtent: 60,
                mainAxisSpacing: 2,
                crossAxisSpacing: 2,
              ),
              itemCount: filtered.length,
              itemBuilder: (context, index) {
                final u = filtered[index];
                final initials = u.getInitials();
                final color = darkUserColors[u.hashCode % darkUserColors.length];
                final avatarTextColor = Colors.white;
                final assignedHours = controller.userAssignedHours[u.id] ?? Duration.zero;
                final bool hasAssignments = assignedHours.inMinutes > 0;
                final String hoursText = hasAssignments
                    ? '${assignedHours.inHours}h ${assignedHours.inMinutes.remainder(60)}m'
                    : '';

                return Draggable<ActivityUserInfoModel>(
                  data: u,
                  onDragStarted: () {
                    controller.hideAssignmentDetailOverlay();
                    controller.onUserDragStarted(u);
                  },
                  onDragEnd: (_) => controller.onUserDragEnd(),
                  feedback: Material(
                    color: Colors.transparent,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          width: 36, height: 36,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: color.withOpacity(0.8),
                            border: Border.all(color: color, width: 1.5),
                          ),
                          child: Center(
                            child: Text(
                              initials,
                              style: TextStyle(
                                color: avatarTextColor,
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(height: 3),
                        Text(
                          u.toFullNameString(),
                          style: TextStyle(color: textColor, fontSize: 12, decoration: TextDecoration.none),
                        ),
                      ],
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.only(top: 6.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Stack(
                          clipBehavior: Clip.none,
                          children: [
                            Container(
                              width: 28, height: 28,
                              margin: const EdgeInsets.only(top: 2),
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: color,
                                border: Border.all(color: color.withOpacity(0.5), width: 1.0),
                              ),
                              child: Center(
                                child: Text(
                                  initials,
                                  style: TextStyle(
                                    color: avatarTextColor,
                                    fontSize: 11,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ),
                            if (hasAssignments)
                              Positioned(
                                top: -6,
                                left: 8,
                                child: Container(
                                  padding: EdgeInsets.symmetric(horizontal: 4, vertical: 1),
                                  decoration: BoxDecoration(
                                    color: controller.isDark ? Colors.orange[800] : Colors.orange[100],
                                    borderRadius: BorderRadius.circular(5),
                                  ),
                                  child: Text(
                                    hoursText,
                                    style: TextStyle(
                                      fontSize: 10,
                                      fontWeight: FontWeight.bold,
                                      color: controller.isDark ? Colors.white : Colors.black87,
                                    ),
                                  ),
                                ),
                              ),
                          ],
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 2, left: 1, right: 1),
                          child: Text(
                            u.toFullNameString(),
                            style: TextStyle(
                              fontSize: 10,
                              color: textColor.withOpacity(0.8),
                              height: 1.1,
                            ),
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            softWrap: true,
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          )
        ],
      ),
    );
  }
}