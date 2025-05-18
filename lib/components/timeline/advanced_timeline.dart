import 'dart:math';

import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/services/web_styles_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/services/time_helper.dart';
import 'schedule_helper.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:cached_network_image/cached_network_image.dart';

/// Centralizes all data & callbacks for the timeline view.
class AdvancedTimelineController {
  final List<TimeBlockItem> events;
  final void Function(int eventId)? onEventPressed;
  final void Function(BuildContext, List<TimeBlockGroup>, TimeBlockItem? parentEvent)? onAddNewEvent;
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
      initialIndex:  TimeHelper.getTimeNowIndexFromDays(datedEvents.map((e) => e.events.first.startTime.weekday)),
      child: Builder(builder: (ctx) {
        final controller = DefaultTabController.of(ctx);
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
                      maxTabBarWidth: 300,
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
    return _EventCard(
      event: e,
      expanded: openId == e.id,
      controller: controller,
      onToggle: () => onToggle(e.id),
    );
  }
}

// Minimum width threshold for inline buttons
const double _kMinWidthForInlineButtons = 420.0;

// Constant to control the use of pastel background color
const bool _kUsePastelBackground = false;

bool isDark(context) => Theme.of(context).brightness == Brightness.dark;

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

  // Adjust color for pastel effect based on theme brightness
  Color _toPastel(BuildContext context, Color color) {
    final HSLColor hslColor = HSLColor.fromColor(color);
    // Reduce saturation significantly
    final double saturated = isDark(context) ? hslColor.saturation * 0.5 : hslColor.saturation * 0.9;
    // Increase lightness, more in dark mode
    final double lightened = isDark(context)
        ? hslColor.lightness * 0.5 + 0.0  // Lighter in dark mode
        : hslColor.lightness * 0.35 + 0.5; // More light in light mode

    return hslColor.withSaturation(saturated.clamp(0.0, 1.0)).withLightness(lightened.clamp(0.0, 1.0)).toColor();
  }

  @override
  Widget build(BuildContext context) {
    //event.timeBlockType = TimeBlockType.signedIn;
    const stripeW = 6.0, stripeH = 58.0;
    final baseColor = ThemeConfig.eventTypeToColor(context, event.eventType);
    final cardColor = _kUsePastelBackground ? _toPastel(context, baseColor) : null;
    final imageUrl = event.imageUrl;
    final capEvent = event.maxParticipants > 0;

    // Responsive inline button logic
    final screenWidth = MediaQuery.of(context).size.width;
    final showInlineButtons = screenWidth >= _kMinWidthForInlineButtons;

    final hasDescription = !HtmlHelper.isHtmlEmptyOrNull(event.description);
    final hasPlace = event.timeBlockPlace?.title != null;
    final isEditor = controller.showAddNewEventButton?.call() ?? false;
    final canSignIn = event.timeBlockType == TimeBlockType.canSignIn;
    final haveChildren = event.haveChildren();
    final canExpand = !haveChildren && !HtmlHelper.isHtmlLong(event.description) && (isEditor || hasDescription || hasPlace || canSignIn);

    final now = TimeHelper.now();
    final bool isCurrentEvent = event.startTime.isBefore(now) && event.endTime.isAfter(now);

    // Determine button and capacity text color based on pastel background
    final buttonTextColor = _kUsePastelBackground
        ? (isDark(context) ? Colors.white : Colors.black87) // Darker color in light mode
        : ThemeConfig.blackColor(context).withOpacityUniversal(context, 0.7);

    final selectedColor = _kUsePastelBackground
        ? (isDark(context) ? Colors.white : Colors.black87) // Darker color in light mode
        : Theme.of(context).primaryColor;

    final unselectedColor = _kUsePastelBackground
        ? (isDark(context) ? Colors.white70 : Colors.black54) // Slightly lighter black for capacity in light mode
        : Colors.grey;

    final signInSignOutButtonBorderColor = _kUsePastelBackground
        ? (isDark(context) ? Colors.white30 : Colors.black26) // Adjusted border color for pastel backgrounds
        : ThemeConfig.blackColor(context).withOpacityUniversal(context, 0.3);

    Widget inlineActionSection;
    if (capEvent) {
      final capBackgroundColor = event.isSignedIn()
          ? selectedColor
          : unselectedColor;

      final capTextColor = event.isSignedIn()
          ? _kUsePastelBackground ? cardColor : Colors.white
          : unselectedColor;

      inlineActionSection = Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Row(
              children: [
                if (event.isSignedIn())
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                    decoration: BoxDecoration(
                      color: selectedColor,
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Row(
                      children: [
                        Text(
                          '${event.participants}/${event.maxParticipants}',
                          style: TextStyle(fontSize: 13, color: capTextColor),
                        ),
                        const SizedBox(width: 4),
                        Icon(Icons.people, size: 14, color: capTextColor),
                      ],
                    ),
                  )
                else
                  Row(
                    children: [
                      Text('${event.participants}/${event.maxParticipants}',
                          style: TextStyle(fontSize: 13, color: capBackgroundColor)),
                      const SizedBox(width: 4),
                      Icon(Icons.people, size: 14, color: capBackgroundColor),
                    ],
                  ),
              ],
            ),
            if (AuthService.isLoggedIn() && (event.isSignedIn() || event.participants < event.maxParticipants) && showInlineButtons) ...[
              const SizedBox(height: 4),
              event.isSignedIn()
                  ? OutlinedButton(
                onPressed: () { controller.onSignOutEvent!(event.id); },
                style: _signButtonStyle(buttonTextColor, signInSignOutButtonBorderColor),
                child: Text('Sign out'.tr()),
              )
                  : OutlinedButton(
                onPressed: () { controller.onSignInEvent!(event.id); },
                style: _signButtonStyle(buttonTextColor, signInSignOutButtonBorderColor),
                child: Text('Sign in'.tr()),
              ),
            ],
          ]
      );
    } else {
      inlineActionSection = Row(
        children: ButtonsHelper.getAddToMyProgramButton(
          !event.isInMySchedule(),
              () async => () { controller.onAddToProgramEvent!(event.id); }(),
              () async => () { controller.onRemoveFromProgramEvent!(event.id); }(),
          selectedColor, // Use adjusted color
          unselectedColor, // Use adjusted color for outline
        ),
      );
    }

    return Center(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
          child: Card(
            color: cardColor,
            elevation: 0,
            shape:
            RoundedRectangleBorder(borderRadius: BorderRadius.circular(StylesConfig.eventItemRoundness)),
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
                    if (!_kUsePastelBackground) Container(width: stripeW, height: stripeH, color: baseColor),
                    const SizedBox(width: 6),

                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              if (isCurrentEvent)
                                Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                                  margin: const EdgeInsets.only(right: 6),
                                  decoration: BoxDecoration(
                                    color: ThemeConfig.redColor(context),
                                    borderRadius: BorderRadius.circular(4),
                                  ),
                                  child: Text(
                                    "Right Now".tr().toUpperCase(),
                                    style: const TextStyle(
                                      color: Colors.white,
                                      fontSize: 10,
                                      fontWeight: FontWeight.bold,
                                      letterSpacing: 0.5,
                                    ),
                                  ),
                                ),
                              Text(event.durationTimeString(),
                                  style: TextStyle(
                                    fontSize: 13,
                                    color: ThemeConfig.blackColor(context).withOpacityUniversal(context, 0.8),
                                  )),
                            ],
                          ),
                          Text(event.title,
                              style: const TextStyle(
                                  fontSize: 15, fontWeight: FontWeight.w600)),
                          if (hasPlace && !expanded) ...[
                            Text(event.timeBlockPlace!.title,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                    color: ThemeConfig.blackColor(context).withOpacityUniversal(context, 0.96), fontSize: 13)),
                          ],
                        ],
                      ),
                    ),
                    // Image positioned after the text content
                    if (imageUrl != null)
                      Padding( // Add padding to the left of the image
                        padding: const EdgeInsets.only(left: 8.0),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(StylesConfig.imageRoundness),
                          clipBehavior: Clip.antiAlias,
                          child: SizedBox(
                            width: 58.0, // Keep image size consistent
                            height: 58.0,
                            child: CachedNetworkImage(
                              imageUrl: imageUrl,
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                      ),
                    const SizedBox(width: 4),
                    inlineActionSection,
                    const SizedBox(width: 4),
                    if (canExpand)
                      Icon(
                        expanded ? Icons.expand_less : Icons.expand_more,
                        size: 20,
                        color: unselectedColor,
                      )
                    else if (hasDescription || hasPlace || isEditor)
                      Icon(Icons.chevron_right, size: 20, color: unselectedColor),
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
                                icon: Icon(Icons.place, size: 14, color: buttonTextColor), // Adjusted icon color
                                label: Text(event.timeBlockPlace!.title, style: TextStyle(color: buttonTextColor)), // Adjusted text color
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
                                icon: Icon(Icons.edit, size: 14, color: buttonTextColor), // Adjusted icon color
                                label: Text('Edit'.tr(), style: TextStyle(color: buttonTextColor)), // Adjusted text color
                                style: TextButton.styleFrom(
                                  padding: EdgeInsets.zero,
                                  alignment: Alignment.centerRight,
                                ),
                              ),
                          ],
                        ),

                        const SizedBox(height: 8),

                        // Responsive inline buttons moved here for small screens
                        if (capEvent && AuthService.isLoggedIn() && (event.isSignedIn() || event.participants < event.maxParticipants) && !showInlineButtons) ...[
                          Center(
                            child: event.isSignedIn()
                                ? OutlinedButton(
                              onPressed: () { controller.onSignOutEvent!(event.id); },
                              style: _signButtonStyle(buttonTextColor, signInSignOutButtonBorderColor),
                              child: Text('Sign out'.tr()),
                            )
                                : OutlinedButton(
                              onPressed: () { controller.onSignInEvent!(event.id); },
                              style: _signButtonStyle(buttonTextColor, signInSignOutButtonBorderColor),
                              child: Text('Sign in'.tr()),
                            ),
                          ),
                          const SizedBox(height: 8),
                        ],

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
                          padding: const EdgeInsets.all(8.0),
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

// Sign in/out button style (smaller)
ButtonStyle _signButtonStyle(Color fg, Color bd) => OutlinedButton.styleFrom(
  foregroundColor: fg,
  side: BorderSide(color: bd),
  textStyle: const TextStyle(fontSize: 13),
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(StylesConfig.signInSignOutRoundness),
  ),
);

/// Tab header widget with scrollable, centered tabs and inline arrow navigation.
/// Tab header widget with scrollable, centered tabs and inline arrow navigation.
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
    this.padding = StylesConfig.tabHeaderPadding,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final controller = DefaultTabController.of(context)!;
    final animation = controller.animation!;
    final todayDate = TimeHelper.now();  // changed from `final today = TimeHelper.now().day;`

    // Total extra width to accommodate both arrows (approx. IconButton width)
    const arrowTotalWidth = 96.0;

    return Container(
      padding: padding,
      decoration: BoxDecoration(
        color: ThemeConfig.tabHeaderColor(context),
        border: StylesConfig.headerBorder(),
      ),
      child: Center(
        child: ConstrainedBox(
          // Limit overall tab header width + arrows
          constraints: BoxConstraints(
            maxWidth: maxTabBarWidth + arrowTotalWidth,
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Back arrow, right next to tabs
              AnimatedBuilder(
                animation: animation,
                builder: (ctx, _) {
                  final canGoBack = controller.index > 0;
                  return IconButton(
                    icon: const Icon(Icons.chevron_left),
                    color: ThemeConfig.tabTextColor(context),
                    onPressed: canGoBack
                        ? () => controller.animateTo(controller.index - 1)
                        : null,
                  );
                },
              ),

              // Scrollable tabs
              Flexible(
                child: ConstrainedBox(
                  constraints: BoxConstraints(maxWidth: maxTabBarWidth),
                  child: TabBar(
                    controller: controller,
                    isScrollable: true,
                    indicator: BoxDecoration(
                      color: ThemeConfig.indicatorColor(context),
                      border: StylesConfig.indicatorBorder(),
                      borderRadius:
                      BorderRadius.circular(StylesConfig.indicatorRoundness),
                    ),
                    indicatorSize: TabBarIndicatorSize.tab,
                    labelColor: Colors.transparent,
                    unselectedLabelColor: Colors.transparent,
                    tabs: List.generate(groups.length, (i) {
                      final group = groups[i];
                      final isToday = group.dateTime!.year == todayDate.year &&
                          group.dateTime!.month == todayDate.month &&
                          group.dateTime!.day == todayDate.day;

                      return SizedBox(
                        width: 42,
                        height: 60,
                        child: AnimatedBuilder(
                          animation: animation,
                          builder: (ctx, _) {
                            final diff =
                            (animation.value - i).abs().clamp(0.0, 1.0);
                            final factor = 1.0 - diff;
                            final labelColor = Color.lerp(
                              ThemeConfig.tabTextColor(context),
                              ThemeConfig.indicatorTextColor(context),
                              factor,
                            )!;
                            return Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text(
                                  weekdays[group.dateTime!.weekday - 1],
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                    color: labelColor,
                                  ),
                                ),
                                const SizedBox(height: 2),
                                Text(
                                  DateFormat.Md(context.locale.toString())
                                      .format(group.dateTime!),
                                  style: TextStyle(
                                      fontSize: 10, color: labelColor),
                                ),
                                if (isToday) ...[
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
              ),

              // Forward arrow, directly adjacent
              AnimatedBuilder(
                animation: animation,
                builder: (ctx, _) {
                  final canGoForward = controller.index < groups.length - 1;
                  return IconButton(
                    icon: const Icon(Icons.chevron_right),
                    color: ThemeConfig.tabTextColor(context),
                    onPressed: canGoForward
                        ? () => controller.animateTo(controller.index + 1)
                        : null,
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}