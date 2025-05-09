import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/services/web_styles_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'schedule_timeline_helper.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/widgets/html_view.dart';

/// Centralizes all data & callbacks for the timeline view.
class AdvancedTimelineController {
  final List<TimeBlockItem> events;
  final void Function(int eventId)? onEventPressed;
  final void Function(BuildContext, List<TimeBlockGroup>, TimeBlockItem? parentEvent)?
  onAddNewEvent;
  final bool Function()? showAddNewEventButton;
  final Future<void> Function(int eventId)? onSignInEvent;
  final Future<void> Function(int eventId)? onSignOutEvent;
  final Future<void> Function(int eventId)? onAddToProgramEvent;
  final Future<void> Function(int eventId)? onRemoveFromProgramEvent;
  final void Function(BuildContext, TimeBlockPlace place)? onPlaceTap;
  final void Function(BuildContext, int eventId)? onEditEvent;

  AdvancedTimelineController({
    required this.events,
    this.onEventPressed,
    this.onAddNewEvent,
    this.showAddNewEventButton,
    this.onSignInEvent,
    this.onSignOutEvent,
    this.onAddToProgramEvent,
    this.onRemoveFromProgramEvent,
    this.onPlaceTap,
    this.onEditEvent,
  });
}

class AdvancedTimelineTab extends StatefulWidget {
  final DateTime? defaultDateTime;
  final AdvancedTimelineController controller;

  const AdvancedTimelineTab({
    super.key,
    required this.controller,
    this.defaultDateTime,
  });

  @override
  _AdvancedTimelineTabState createState() => _AdvancedTimelineTabState();
}

class _AdvancedTimelineTabState extends State<AdvancedTimelineTab> {
  int? _openId;

  @override
  Widget build(BuildContext context) {
    // 1) Weekday labels
    final weekdays = List.generate(7, (i) =>
        DateFormat.E(context.locale.toString())
            .format(DateTime(2020, 1, 6 + i))
            .toUpperCase()
    );

    // 2) Split into days
    final datedEvents = TimeBlockHelper.splitTimeBlocksByDate(
      widget.controller.events,
      context,
      AppConfig.daySplitHour,
    );

    if (datedEvents.isEmpty) {
      final dt = widget.defaultDateTime ?? TimeHelper.now();
      datedEvents.add(TimeBlockGroup(
        title: dt.weekdayToString(context),
        events: [],
        dateTime: dt,
      ));
    }

    return DefaultTabController(
      length: datedEvents.length,
      child: Builder(builder: (ctx) {
        final controller = DefaultTabController.of(ctx)!;

        return Scaffold(
          body: SafeArea(
            child: Column(children: [
              const SizedBox(height: 4),

              // ——— Animated Day‐Tabs ———
              AnimatedBuilder(
                animation: controller.animation!,
                builder: (_, __) {
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 8),
                    child: AdvancedTimelineView(
                      weekdays: weekdays,
                      groups: datedEvents,
                      maxTabBarWidth: 300,                    // same as your old BoxConstraints
                      padding: const EdgeInsets.symmetric(vertical: 0),
                    ),
                  );
                },
              ),

              // ——— Events list & “Add” button per day ———
              Expanded(
                child: TabBarView(
                  controller: controller,
                  children: [
                    for (var dayGroup in datedEvents)
                      DayList(
                        dayGroup: dayGroup,
                        controller: widget.controller,
                        openId: _openId,
                        onToggle: (id) => setState(
                                () => _openId = _openId == id ? null : id),
                      ),
                  ],
                ),
              ),
            ]),
          ),
        );
      }),
    );
  }
}

class DayList extends StatelessWidget {
  final TimeBlockGroup dayGroup;
  final AdvancedTimelineController controller;
  final int? openId;
  final void Function(int) onToggle;

  const DayList({
    required this.dayGroup,
    required this.controller,
    required this.onToggle,
    this.openId,
  });

  @override
  Widget build(BuildContext context) {
    final events = dayGroup.events;
    final morning   = events.where((e) => e.startTime.hour < 12);
    final afternoon = events.where((e) => e.startTime.hour >= 12 && e.startTime.hour < 18);
    final evening   = events.where((e) => e.startTime.hour >= 18);

    final children = <Widget>[];
    children.addAll(morning.map(_buildCard));
    if (afternoon.isNotEmpty) {
      children.add(_section('Afternoon'.tr()));
      children.addAll(afternoon.map(_buildCard));
    }
    if (evening.isNotEmpty) {
      children.add(_section('Evening'.tr()));
      children.addAll(evening.map(_buildCard));
    }

    if (FeatureService.isFeatureEnabled(FeatureConstants.mySchedule) && (controller.showAddNewEventButton?.call() ?? false)) {
      children.add(
        Center(
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 28.0),
            child: TextButton.icon(
              onPressed: () => controller.onAddNewEvent
                  ?.call(context, [dayGroup], null),
              icon: const Icon(Icons.add_circle_outline, size: 24),
              label: const Text("Add To Schedule").tr(),
              style: TextButton.styleFrom(
                foregroundColor: ThemeConfig.timelineAddNewEventColor(context),
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
              ),
            ),
          ),
        ),
      );
    }

    return ListView(padding: const EdgeInsets.symmetric(vertical: 4), children: children);
  }

  Widget _section(String t) => Padding(
    padding: const EdgeInsets.symmetric(vertical: 12),
    child: Center(child: Text(t, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600))),
  );

  Widget _buildCard(TimeBlockItem e) {
    final isOpen = openId == e.id;

    return _EventCard(
      event: e,
      expanded: isOpen,
      controller: controller,
      onToggle: () => onToggle(e.id),
    );
  }
}

class _EventCard extends StatelessWidget {
  final TimeBlockItem event;
  final bool expanded;
  final AdvancedTimelineController controller;
  final VoidCallback onToggle;

  const _EventCard({
    required this.event,
    required this.expanded,
    required this.controller,
    required this.onToggle
  });

  @override
  Widget build(BuildContext context) {
    final col = ThemeConfig.eventTypeToColor(context, event.eventType);
    const stripeW = 6.0, stripeH = 48.0;
    final capEvent = event.maxParticipants > 0;

    final hasDescription = !HtmlHelper.isHtmlEmptyOrNull(event.description);
    final hasPlace = event.timeBlockPlace?.title != null;
    final isEditor = controller.showAddNewEventButton?.call() ?? false;
    final canSignIn = event.timeBlockType == TimeBlockType.canSignIn;
    final haveChildren = event.haveChildren();
    final canExpand = !haveChildren && !HtmlHelper.isHtmlLong(event.description) && (isEditor || hasDescription || hasPlace || canSignIn);

    Widget actionSection;
    if (capEvent) {
      final capColor = event.isSignedIn()
          ? Theme.of(context).primaryColor
          : Colors.grey;

        actionSection = Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Row(children: [
              Text('${event.participants}/${event.maxParticipants}',
                  style: TextStyle(fontSize: 12, color: capColor)),
              const SizedBox(width: 4),
              Icon(Icons.people, size: 14, color: capColor),
            ]),
            if(AuthService.isLoggedIn() && (event.isSignedIn() || event.participants < event.maxParticipants)) ...[
              const SizedBox(height: 4),
              event.isSignedIn()
                  ? OutlinedButton(
                onPressed: () { controller.onSignOutEvent!(event.id); },
                style: OutlinedButton.styleFrom(
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16)),
                  padding: const EdgeInsets.symmetric(
                      horizontal: 12, vertical: 6),
                ),
                child: Text('Sign out'.tr()),
              )
                  : ElevatedButton(
                onPressed: () { controller.onSignInEvent!(event.id); },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Theme.of(context).primaryColor,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16)),
                  padding: const EdgeInsets.symmetric(
                      horizontal: 12, vertical: 6),
                  elevation: 0,
                ),
                child: Text('Sign in'.tr()),
              ),
            ],
          ]
        );
    } else {
      actionSection = Row(
        children: ButtonsHelper.getAddToMyProgramButton(
          !event.isInMySchedule(),
              () async => () { controller.onAddToProgramEvent!(event.id); }(),
              () async => () { controller.onRemoveFromProgramEvent!(event.id); }(),
          Theme.of(context).primaryColor,
          Colors.grey,
        ),
      );
    }

    return Center(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
          child: Card(
            elevation: 0,
            shape:
            RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            clipBehavior: Clip.hardEdge,
            child: Column(children: [
              InkWell(
                onTap: () {
                  if (canExpand) {
                    onToggle();
                  } else {
                    controller.onEventPressed?.call(event.id);
                  }
                },
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 6),
                  child: Row(children: [
                    Container(width: stripeW, height: stripeH, color: col),
                    const SizedBox(width: 6),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(event.title,
                              style: const TextStyle(
                                  fontSize: 15, fontWeight: FontWeight.w600)),
                          const SizedBox(height: 2),
                          Text(event.durationTimeString(),
                              style: TextStyle(
                                fontSize: 11,
                                color: ThemeConfig.darkColor(context).withOpacity(0.7),
                              )),
                          if (hasPlace && !expanded) ...[
                            const SizedBox(height: 2),
                            Text(event.timeBlockPlace!.title,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                    color: ThemeConfig.darkColor(context), fontSize: 12)),
                          ],
                        ],
                      ),
                    ),
                    const SizedBox(width: 4),
                    actionSection,
                    const SizedBox(width: 4),
                    if (canExpand)
                      Icon(
                        expanded ? Icons.expand_less : Icons.expand_more,
                        size: 20,
                        color: ThemeConfig.darkColor(context),
                      )
                    else if (hasDescription || hasPlace || isEditor)
                      Icon(Icons.chevron_right, size: 20, color: ThemeConfig.darkColor(context)),
                  ]),
                ),
              ),

              if (canExpand)
                AnimatedCrossFade(
                  firstChild: const SizedBox.shrink(),
                  secondChild: Padding(
                    padding: const EdgeInsets.fromLTRB(12, 0, 12, 6),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            if (event.timeBlockPlace != null)
                              TextButton.icon(
                                onPressed: () => controller.onPlaceTap
                                    ?.call(context, event.timeBlockPlace!),
                                icon: const Icon(Icons.place, size: 14),
                                label: Text(event.timeBlockPlace!.title),
                                style: TextButton.styleFrom(
                                  padding: EdgeInsets.zero,
                                  alignment: Alignment.centerLeft,
                                ),
                              ),
                            const Spacer(),
                            if (isEditor)
                              TextButton.icon(
                                onPressed: () =>
                                    controller.onEditEvent?.call(context, event.id),
                                icon: const Icon(Icons.edit, size: 14),
                                label: const Text('Edit').tr(),
                                style: TextButton.styleFrom(
                                  padding: EdgeInsets.zero,
                                  alignment: Alignment.centerRight,
                                ),
                              ),
                          ],
                        ),

                        const SizedBox(height: 8),

                        // Show sign-in prompt for unauthenticated users
                        if (event.timeBlockType == TimeBlockType.canSignIn && !AuthService.isLoggedIn()) ...[
                          Padding(
                            padding: const EdgeInsets.all(16.0),
                            child: HtmlView(
                                        html: '''
                                <div style="color: ${ThemeConfig.redColor(context).toHexString()}; text-align: center;">
                                  <div>${"An account is required to join this event.".tr()}</div>
                                  <a href="${AppConfig.webLink}/#/login" style="color: ${ThemeConfig.redColor(context).toHexString()};">
                                    ${"Click here to sign in.".tr()}
                                  </a>
                                </div>
                              ''',
                              isSelectable: true,
                              fontSize: 16,
                            ),
                          ),
                          const SizedBox(height: 8),
                        ],

                        // HTML description with extra horizontal padding
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 8.0),
                          child: HtmlView(
                            html: event.description ?? "",
                            isSelectable: true,
                          ),
                        ),
                      ],
                    ),
                  ),
                  crossFadeState: expanded
                      ? CrossFadeState.showSecond
                      : CrossFadeState.showFirst,
                  duration: const Duration(milliseconds: 200),
                  firstCurve: Curves.easeOut,
                  secondCurve: Curves.easeIn,
                  sizeCurve: Curves.easeInOut,
                ),
            ]),
          ),
        ),
      ),
    );
  }
}


class AdvancedTimelineView extends StatelessWidget {
  /// Localized weekday labels (e.g., ['MON', 'TUE', ...]).
  final List<String> weekdays;

  /// Groups corresponding to each tab (must have a non-null dateTime).
  final List<TimeBlockGroup> groups;

  /// Maximum width for the TabBar (e.g., StylesConfig.formMaxWidth).
  final double maxTabBarWidth;

  /// Optional padding around the widget.
  final EdgeInsetsGeometry padding;

  const AdvancedTimelineView({
    Key? key,
    required this.weekdays,
    required this.groups,
    this.maxTabBarWidth = StylesConfig.formMaxWidth,
    this.padding = const EdgeInsets.symmetric(vertical: 4),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final controller = DefaultTabController.of(context)!;
    final animation = controller.animation!;
    final today = TimeHelper.now().day;

    return Container(
      padding: padding,
      color: Theme.of(context).scaffoldBackgroundColor,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // Left arrow
          IconButton(
            icon: const Icon(Icons.chevron_left),
            onPressed: controller.index > 0
                ? () => controller.animateTo(controller.index - 1)
                : null,
          ),

          // TabBar in constrained box
          ConstrainedBox(
            constraints: BoxConstraints(maxWidth: maxTabBarWidth),
            child: TabBar(
              controller: controller,
              isScrollable: true,
              indicator: BoxDecoration(
                color: Theme.of(context).primaryColor,
                borderRadius: BorderRadius.circular(12),
              ),
              indicatorSize: TabBarIndicatorSize.tab,
              labelColor: Colors.transparent,
              unselectedLabelColor: Colors.transparent,
              tabs: List.generate(groups.length, (i) {
                final day = groups[i].dateTime!.day;
                return SizedBox(
                  width: 42,
                  height: 60,
                  child: AnimatedBuilder(
                    animation: animation,
                    builder: (ctx, _) {
                      final diff = (animation.value - i).abs().clamp(0.0, 1.0);
                      final factor = 1.0 - diff;
                      final labelColor = Color.lerp(
                        ThemeConfig.darkColor(context),
                        ThemeConfig.whiteColor(context),
                        factor,
                      )!;

                      return Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            weekdays[groups[i].dateTime!.weekday - 1],
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              color: labelColor,
                            ),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            day.toString().padLeft(2, '0'),
                            style: TextStyle(fontSize: 10, color: labelColor),
                          ),
                          if (day == today) ...[
                            const SizedBox(height: 4),
                            Container(
                              width: 6,
                              height: 6,
                              decoration: BoxDecoration(
                                color: ThemeConfig.redColor(context),
                                shape: BoxShape.circle,
                              ),
                            ),
                          ],
                        ],
                      );
                    },
                  ),
                );
              }),
            ),
          ),

          // Right arrow
          IconButton(
            icon: const Icon(Icons.chevron_right),
            onPressed: controller.index < groups.length - 1
                ? () => controller.animateTo(controller.index + 1)
                : null,
          ),
        ],
      ),
    );
  }
}

