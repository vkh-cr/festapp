// day_list.dart
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/services/web_styles_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'schedule_helper.dart';
import 'advanced_timeline_controller.dart';
import 'package:fstapp/app_config.dart';


class DayList extends StatelessWidget {
  final TimeBlockGroup dayGroup;
  final AdvancedTimelineController controller;
  final int? openId;
  final void Function(int) onToggle;

  const DayList({
    super.key,
    required this.dayGroup,
    required this.controller,
    required this.onToggle,
    this.openId,
  });

  @override
  Widget build(BuildContext context) {
    final events = dayGroup.events;

    // Use custom splitter if provided, otherwise default to splitTimeBlocksByTimeOfDay
    final List<TimeBlockGroup> groupedEvents = controller.customSplitter?.call(events, context) ??
        TimeBlockHelper.splitTimeBlocksByTimeOfDay(events);

    final children = <Widget>[];

    for (var group in groupedEvents) {
      if (group.title.isNotEmpty) {
        children.add(_section(group.title));
      }
      children.addAll(group.events.map((e) => _buildCard(e, context)));
    }

    if (
    FeatureService.isFeatureEnabled(FeatureConstants.mySchedule) &&
        (controller.showAddNewEventButton?.call() ?? false) &&
        controller.onAddNewEvent != null
    ) {
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
    padding: const EdgeInsets.symmetric(vertical: 18),
    child: Center(child: Text(t, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600))),
  );

  Widget _buildCard(TimeBlockItem e, BuildContext context) {
    return _EventCard(
      key: ValueKey(e.id),
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

class _EventCard extends StatefulWidget {
  final TimeBlockItem event;
  final bool expanded;
  final AdvancedTimelineController controller;
  final VoidCallback onToggle;

  const _EventCard({
    Key? key,
    required this.event,
    required this.expanded,
    required this.controller,
    required this.onToggle,
  }) : super(key: key);

  @override
  _EventCardState createState() => _EventCardState();
}

class _EventCardState extends State<_EventCard> with SingleTickerProviderStateMixin {
  late AnimationController _removeAnimationController;
  late Animation<double> _opacityAnimation;
  late Animation<double> _sizeAnimation;
  bool _isDisposed = false;

  @override
  void initState() {
    super.initState();
    _removeAnimationController = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );

    _opacityAnimation = Tween<double>(begin: 1.0, end: 0.0).animate(
        CurvedAnimation(parent: _removeAnimationController, curve: Curves.easeOut)
    );
    _sizeAnimation = Tween<double>(begin: 1.0, end: 0.0).animate(
        CurvedAnimation(parent: _removeAnimationController, curve: Curves.easeOut)
    );
  }

  @override
  void dispose() {
    _isDisposed = true;
    _removeAnimationController.dispose();
    super.dispose();
  }

  Future<void> _handleRemoveEvent(int eventId) async {
    if (!mounted) return;

    if (widget.controller.animateEventRemoval) {
      await _removeAnimationController.forward(); // Corrected: await the forward() call
      if (!mounted || _isDisposed) return;
      await widget.controller.onRemoveFromProgramEvent?.call(eventId);
    } else {
      await widget.controller.onRemoveFromProgramEvent?.call(eventId);
    }
  }

  Future<void> _handleSignOutEvent(int eventId) async {
    if (!mounted) return;

    if (widget.controller.animateEventRemoval) {
      await _removeAnimationController.forward(); // Corrected: await the forward() call
      if (!mounted || _isDisposed) return;
      await widget.controller.onSignOutEvent?.call(eventId);
      // Assuming onSignOutEvent leads to this card's removal or state change
      // that makes it disappear from the current view.
    } else {
      await widget.controller.onSignOutEvent?.call(eventId);
    }
  }

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
    final event = widget.event;
    final expanded = widget.expanded;
    final controller = widget.controller;
    final onToggle = widget.onToggle;

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
        ? (isDark(context) ? Colors.white : Colors.black87)
        : ThemeConfig.blackColor(context).withOpacityUniversal(context, 0.7);

    final selectedColor = _kUsePastelBackground
        ? (isDark(context) ? Colors.white : Colors.black87)
        : Theme.of(context).primaryColor;

    final unselectedColor = _kUsePastelBackground
        ? (isDark(context) ? Colors.white70 : Colors.black54)
        : Colors.grey;

    final signInSignOutButtonBorderColor = _kUsePastelBackground
        ? (isDark(context) ? Colors.white30 : Colors.black26)
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
                onPressed: () => _handleSignOutEvent(event.id), // MODIFIED for animation
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
              () async => await controller.onAddToProgramEvent!(event.id),
              () => _handleRemoveEvent(event.id),
          selectedColor,
          unselectedColor,
        ),
      );
    }

    Widget cardContent = Center(
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
                    if (imageUrl != null)
                      Padding(
                        padding: const EdgeInsets.only(left: 8.0),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(StylesConfig.imageRoundness),
                          clipBehavior: Clip.antiAlias,
                          child: SizedBox(
                            width: 58.0,
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
                                icon: Icon(Icons.place, size: 14, color: selectedColor),
                                label: Text(event.timeBlockPlace!.title, style: TextStyle(color: selectedColor)),
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
                                icon: Icon(Icons.edit, size: 14, color: selectedColor),
                                label: Text('Edit'.tr(), style: TextStyle(color: selectedColor)),
                                style: TextButton.styleFrom(
                                  padding: EdgeInsets.zero,
                                  alignment: Alignment.centerRight,
                                ),
                              ),
                          ],
                        ),

                        const SizedBox(height: 8),

                        if (capEvent && AuthService.isLoggedIn() && (event.isSignedIn() || event.participants < event.maxParticipants) && !showInlineButtons) ...[
                          Center(
                            child: event.isSignedIn()
                                ? OutlinedButton(
                              onPressed: () => _handleSignOutEvent(event.id), // MODIFIED for animation
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

    return SizeTransition(
      sizeFactor: _sizeAnimation,
      axisAlignment: -1.0,
      child: FadeTransition(
        opacity: _opacityAnimation,
        child: cardContent,
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