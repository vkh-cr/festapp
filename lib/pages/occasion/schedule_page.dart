import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/feature_constants.dart' show FeatureConstants;
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/timeline/advanced_timeline.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/data_services/DataExtensions.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/dialogs/add_new_event_dialog.dart';
import 'package:fstapp/pages/occasion/event_edit_page.dart';
import 'package:fstapp/pages/occasion/event_page.dart';
import 'package:fstapp/pages/occasion/map_page.dart';
import 'package:fstapp/pages/occasion/my_schedule_page.dart';
import 'package:fstapp/pages/occasion/timetable_page.dart';
import 'package:fstapp/pages/unit/unit_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/logo_widget.dart';
import 'package:package_info_plus/package_info_plus.dart';

@RoutePage()
class SchedulePage extends StatefulWidget {
  static const ROUTE = "schedule";
  const SchedulePage({super.key});

  @override
  _SchedulePageState createState() => _SchedulePageState();
}

class _SchedulePageState extends State<SchedulePage>
    with WidgetsBindingObserver {
  final ScrollController _scrollController = ScrollController();
  List<TimeBlockItem> _dots = [];
  List<EventModel> _events = [];
  final Map<int, String?> _eventDescriptions = {};
  bool _fullEventsLoaded = false;

  // for timeline-expand state
  int? _openId;
  final Set<int> _signedIn = {};
  final Set<int> _inProgram = {};

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    loadData();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) loadData();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> loadData() async {
    await _loadOfflineDataThenFast();
    if (!_fullEventsLoaded) {
      await _loadFullData();
      _fullEventsLoaded = true;
    }
  }

  Future<void> _loadOfflineDataThenFast() async {
    if (_events.isEmpty) {
      await OfflineDataService.getAllEvents().then((offline) {
         _events = offline;
         for (var e in _events) {
           _eventDescriptions[e.id!] = e.description;
         }
         _dots = _events
             .filterRootEvents()
             .map((e) => TimeBlockItem.fromEventModel(e))
             .toList();
         setState(() {});
      });
    }

    final fast = await DbEvents.getAllEvents(
      RightsService.currentOccasionId()!,
      false,
    );
    // re-attach cached desc
    for (var e in fast) {
      if (e.id != null && _eventDescriptions.containsKey(e.id!)) {
        e.description = _eventDescriptions[e.id!];
      }
    }

    _events = fast;
    if (!AuthService.isLoggedIn()) {
      final saved = await OfflineDataService.getMyScheduleData();
      for (var e in _events) {
        e.isEventInMySchedule = e.id != null && saved.contains(e.id);
      }
    }
    _dots = _events
        .filterRootEvents()
        .map((e) => TimeBlockItem.fromEventModel(e))
        .toList();

    setState(() {});
  }

  Future<void> _loadFullData() async {
    final full = await DbEvents.getAllEvents(
      RightsService.currentOccasionId()!,
      true,
    );
    for (var e in full) {
      if (e.id != null) _eventDescriptions[e.id!] = e.description;
    }
    _events = full;
    if (!AuthService.isLoggedIn()) {
      final saved = await OfflineDataService.getMyScheduleData();
      for (var e in _events) {
        e.isEventInMySchedule = e.id != null && saved.contains(e.id);
      }
    }
    _dots = _events
        .filterRootEvents()
        .map((e) => TimeBlockItem.fromEventModel(e))
        .toList();
    await OfflineDataService.saveAllEvents(_events);
    setState(() {});
  }

  Future<void> _handleSignIn(int id) async {
    await DbEvents.signInToEvent(context, id);
    _signedIn.add(id);
    setState(() {});
    await loadData();
  }

  Future<void> _handleSignOut(int id) async {
    await DbEvents.signOutFromEvent(context, id);
    _signedIn.remove(id);
    setState(() {});
    await loadData();
  }

  Future<void> _handleAdd(int id) async {
    await DbEvents.addToMySchedule(context, id);
    _inProgram.add(id);
    setState(() {});
    await loadData();
  }

  Future<void> _handleRemove(int id) async {
    await DbEvents.removeFromMySchedule(context, id);
    _inProgram.remove(id);
    setState(() {});
    await loadData();
  }

  void _eventPressed(int id) {
    RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id")
        .then((_) => loadData());
  }

  void _goToMap(int placeId) {
    RouterService.navigateOccasion(context, "${MapPage.ROUTE}/$placeId")
        .then((_) => loadData());
  }

  void _openAddDialog(
      BuildContext ctx, List<TimeBlockGroup> groups, TimeBlockItem? p) =>
      AddNewEventDialog.showAddEventDialog(ctx, groups)
          .then((_) => loadData());

  @override
  Widget build(BuildContext context) {
    final bool isLargeScreen = MediaQuery.of(context).size.height > 860;

    // split into days
    final datedEvents = TimeBlockHelper.splitTimeBlocksByDate(
      _dots,
      context,
      AppConfig.daySplitHour,
    );
    if (datedEvents.isEmpty) {
      final dt = TimeHelper.now();
      datedEvents.add(TimeBlockGroup(
        title: dt.weekdayToString(context),
        events: [],
        dateTime: dt,
      ));
    }

    // weekday labels for tabs
    final weekdays = List.generate(7, (i) {
      return DateFormat.E(context.locale.toString())
          .format(DateTime(2020, 1, 6 + i))
          .toUpperCase();
    });

    return Scaffold(
      backgroundColor: ThemeConfig.appBarColor(),
      body: SafeArea(
        top: true,
        bottom: false,
        child: DefaultTabController(
          initialIndex:  TimeHelper.getTimeNowIndexFromDays(datedEvents.map((e) => e.events.firstOrNull?.startTime.weekday ?? 0)),
          length: datedEvents.length,
          child: NestedScrollView(
            controller: _scrollController,
            headerSliverBuilder: (ctx, inner) => [
              SliverAppBar(
                collapsedHeight: 62,
                expandedHeight: isLargeScreen ? 62 : 62,
                pinned: isLargeScreen,
                floating: false,
                automaticallyImplyLeading: false,
                flexibleSpace: FlexibleSpaceBar(
                  background: Padding(
                    padding: const EdgeInsets.fromLTRB(12, 0, 12, 0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        GestureDetector(
                          onTap: () => RouterService.navigate(
                              context,
                              "${UnitPage.ROUTE}/${RightsService.currentUnit()!.id!}"),
                          onDoubleTap: () async {
                            final info = await PackageInfo.fromPlatform();
                            ToastHelper.Show(context,
                                "${info.appName} ${info.version}+${info.buildNumber}");
                            if (RightsService.isEditor()) {
                              setState(() => TimeHelper.toggleTimeTravel?.call());
                            }
                          },
                          child: LogoWidget(width: 50, forceDark: true),
                        ),
                        const Spacer(),
                        if (FeatureService.isFeatureEnabled(
                            FeatureConstants.mySchedule))
                          _IconWithLabel(
                            icon: Icons.favorite,
                            label: "My schedule".tr(),
                            onPressed: () {
                              RouterService.navigateOccasion(
                                  context, MySchedulePage.ROUTE)
                                  .then((_) => loadData());
                            },
                          ),
                        if (FeatureService.isFeatureEnabled(
                            FeatureConstants.timetable))
                          _IconWithLabel(
                            icon: Icons.calendar_month,
                            label: "Schedule".tr(),
                            onPressed: () {
                              RouterService.navigateOccasion(
                                  context, TimetablePage.ROUTE)
                                  .then((_) => loadData());
                            },
                          ),
                      ],
                    ),
                  ),
                ),
              ),
              SliverPersistentHeader(
                pinned: true,
                delegate: _SliverToBoxAdapterDelegate(
                  dayGroups: datedEvents,
                  child: AdvancedTimelineView(
                    weekdays: weekdays,
                    groups: datedEvents,
                    maxTabBarWidth: StylesConfig.formMaxWidth,
                  ),
                ),
              ),
            ],
            body: Container(
              color: Theme.of(context).scaffoldBackgroundColor,
              child: TabBarView(
                children: [
                  for (var group in datedEvents)
                    DayList(
                      dayGroup: group,
                      onToggle: (id) => setState(
                              () => _openId = _openId == id ? null : id),
                      openId: _openId,
                      controller: AdvancedTimelineController(
                        events: _dots,
                        onEventPressed: _eventPressed,
                        showAddNewEventButton: RightsService.isEditor,
                        onAddNewEvent: _openAddDialog,
                        onSignInEvent: _handleSignIn,
                        onSignOutEvent: _handleSignOut,
                        onAddToProgramEvent: _handleAdd,
                        onRemoveFromProgramEvent: _handleRemove,
                        onEditEvent: (c, ev) => RouterService
                            .navigateOccasion(
                            context, "${EventEditPage.ROUTE}/$ev")
                            .then((_) => loadData()),
                        onPlaceTap: (c, pl) => _goToMap(pl.id),
                      ),
                    ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Renders the arrow+TabBar row
class _SliverToBoxAdapterDelegate extends SliverPersistentHeaderDelegate {
  final Widget child;
  List<TimeBlockGroup> dayGroups;
  _SliverToBoxAdapterDelegate({required this.child, required this.dayGroups});

  @override double get minExtent => child is PreferredSizeWidget
      ? (child as PreferredSizeWidget).preferredSize.height
      : 62;
  @override double get maxExtent => minExtent;

  @override Widget build(BuildContext _, double __, bool ___) => child;

  @override
  bool shouldRebuild(_SliverToBoxAdapterDelegate old) => !old.dayGroups.equals(dayGroups);
}

class _IconWithLabel extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onPressed;

  const _IconWithLabel({
    Key? key,
    required this.icon,
    required this.label,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final color = ThemeConfig.appBarColorNegative();
    return InkWell(
      onTap: onPressed,
      borderRadius: BorderRadius.circular(24),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 12),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              icon,
              size: 24,
              color: color,
            ),
            const SizedBox(height: 6),
            Text(
              label,
              style: TextStyle(color: color, fontSize: 12),
            ),
          ],
        ),
      ),
    );
  }
}
