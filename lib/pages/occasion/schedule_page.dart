import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/feature_constants.dart' show FeatureConstants;
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/schedule_feature.dart';
import 'package:fstapp/components/timeline/advanced_timeline_controller.dart';
import 'package:fstapp/components/timeline/advanced_timeline_day_list.dart';
import 'package:fstapp/components/timeline/advanced_timeline_view.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/data_services/data_extensions.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/dialogs/add_new_event_dialog.dart';
import 'package:fstapp/pages/occasion/event_edit_page.dart';
import 'package:fstapp/pages/occasion/event_page.dart';
import 'package:fstapp/pages/occasion/map_page.dart';
import 'package:fstapp/pages/occasion/my_schedule_page.dart';
import 'package:fstapp/pages/occasion/timetable_page.dart';
import 'package:fstapp/pages/occasion/occasion_home_page.dart';
import 'package:fstapp/pages/unit/unit_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/logo_widget.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/dialogs/companion_dialog.dart';
import 'package:fstapp/data_services/db_companions.dart';
import 'package:fstapp/data_models/companion_model.dart';

@RoutePage()
class SchedulePage extends StatefulWidget {
  static const ROUTE = "schedule";
  const SchedulePage({super.key});

  @override
  _SchedulePageState createState() => _SchedulePageState();
}

class _SchedulePageState extends State<SchedulePage>
    with WidgetsBindingObserver {

  static bool _isLoading = false;
  static bool _fullDataGloballyLoaded = false;
  static DateTime? _lastQuickLoadTime;
  static const Duration _quickLoadRateLimit = Duration(seconds: 10);

  final ScrollController _scrollController = ScrollController();
  List<TimeBlockItem> _dots = [];
  List<EventModel> _events = [];
  static final Map<int, String?> _eventDescriptions = {};

  TabsRouter? _tabsRouter;

  // for timeline-expand state
  int? _openId;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    context.tabsRouter.addListener(_onTabSwitch);
    loadData();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // This safely caches the router instance for use in dispose().
    _tabsRouter = context.tabsRouter;
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      loadData();
    }
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _tabsRouter?.removeListener(_onTabSwitch);
    _scrollController.dispose();
    super.dispose();
  }

  bool _isRoutePresent(String routeName) {
    final childControllers = context.tabsRouter.childControllers;

    for (final controller in childControllers) {
      final key = controller.key;

      if (key is ValueKey<String>) {
        if (key.value == routeName) {
          return true;
        }
      }
    }

    return false;
  }

  Future<void> _onTabSwitch() async {

    final String targetRouteName = ScheduleNavigationRoute.name;
    if (context.tabsRouter.activeIndex == OccasionHomePage.visibleTabKeys.indexOf(OccasionTab.home) &&
        _isRoutePresent(targetRouteName)) {
      final now = DateTime.now();
      if (_lastQuickLoadTime == null || now.difference(_lastQuickLoadTime!) > _quickLoadRateLimit) {
        // Set the time before calling loadData to prevent multiple rapid calls.
        _lastQuickLoadTime = now;
        await loadData();
      }
    }
  }

  Future<void> loadData() async {
    if (_isLoading) return;

    setState(() {
      _isLoading = true;
    });

    try {
      await _loadOfflineDataThenFast();
      if (!_fullDataGloballyLoaded) {
        await _loadFullData();
        _fullDataGloballyLoaded = true;
      }
    } finally {
      if(mounted) {
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  Future<void> _loadOfflineDataThenFast() async {
    if (_events.isEmpty) {
      final offline = await OfflineDataService.getAllEvents();
      _events = offline;
      for (var e in _events) {
        if (e.id != null) _eventDescriptions[e.id!] = e.description;
      }
      _dots = _events
          .filterRootEvents()
          .map((e) => TimeBlockItem.fromEventModel(e))
          .toList();
    }

    if (!AuthService.isLoggedIn() && AppConfig.isOwnProgramSupportedWithoutSignIn) {
      await OfflineDataService.updateEventsWithMySchedule(_events);
      _dots = _events
          .filterRootEvents()
          .map((e) => TimeBlockItem.fromEventModel(e))
          .toList();
    }

    if(mounted) {
      setState(() {});
    }

    final fast = await DbEvents.getAllEvents(
      RightsService.currentOccasionId()!,
      false,
    );
    print("loaded data fast");
    _lastQuickLoadTime = DateTime.now();


    for (var e in fast) {
      if (e.id != null && _eventDescriptions.containsKey(e.id!)) {
        e.description = _eventDescriptions[e.id!];
      }
    }

    _events = fast;
    if (!AuthService.isLoggedIn()) {
      final saved = await OfflineDataService.getMyScheduleData();
      for (var e in _events) {
        e.isInMySchedule = e.id != null && saved.contains(e.id);
      }
    }
    _dots = _events
        .filterRootEvents()
        .map((e) => TimeBlockItem.fromEventModel(e))
        .toList();

    if(mounted) {
      setState(() {});
    }
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

    if (!AuthService.isLoggedIn() && AppConfig.isOwnProgramSupportedWithoutSignIn) {
      await OfflineDataService.updateEventsWithMySchedule(_events);
    }

    _dots = _events
        .filterRootEvents()
        .map((e) => TimeBlockItem.fromEventModel(e))
        .toList();
    await OfflineDataService.saveAllEvents(_events);
    if(mounted) {
      setState(() {});
    }
  }

  Future<void> _handleSignIn(int id) async {
    await DbEvents.signInToEvent(context, id);
    await loadData();
  }

  Future<void> _handleSignOut(int id) async {
    await DbEvents.signOutFromEvent(context, id);
    await loadData();
  }

  Future<void> _handleAdd(int id) async {
    await DbEvents.addToMySchedule(context, id);
    await loadData();
  }

  Future<void> _handleRemove(int id) async {
    await DbEvents.removeFromMySchedule(context, id);
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
      AddNewEventDialog.showAddEventDialog(ctx, groups, p)
          .then((_) => loadData());

  bool _isUserApprover() => RightsService.isApprover();

  Future<void> _handleScanButtonPressed(BuildContext context, int eventId) async {
    RouterService.navigatePageInfo(context, CheckRoute(id: eventId));
  }

  Future<void> _handleCompanionButtonPressed(BuildContext context, TimeBlockItem timeBlockItem) async {
    List<CompanionModel> companions = await DbCompanions.getAllCompanions();
    showDialog(
      context: context,
      builder: (BuildContext dialogContext) {
        return StatefulBuilder(builder: (bCtx, setDialogState) {
          return CompanionDialog(
            eventId: timeBlockItem.id,
            maxCompanions: FeatureService.getMaxCompanions() ?? 0,
            companions: companions,
            refreshData: () async {
              await loadData();
              var refreshedCompanions = await DbCompanions.getAllCompanions();
              if (mounted) {
                setDialogState(() {
                  companions = refreshedCompanions;
                });
              }
            },
            canSignIn: () {
              final currentItem = _dots.firstWhereOrNull((element) => element.id == timeBlockItem.id);
              return currentItem?.canSignIn() ?? false;
            },
          );
        });
      },
    );
  }

  int _calculateTargetTabIndex(List<TimeBlockGroup> currentDatedEvents) {
    if (currentDatedEvents.isEmpty) {
      return 0;
    }

    DateTime now = TimeHelper.now();
    int targetIndex = 0;
    int? currentEventDayIndex;

    for (int dayIdx = 0; dayIdx < currentDatedEvents.length; dayIdx++) {
      final dayGroup = currentDatedEvents[dayIdx];
      for (final event in dayGroup.events) {
        if (event.startTime.isBefore(now) && event.endTime.isAfter(now)) {
          currentEventDayIndex = dayIdx;
          break;
        }
      }
      if (currentEventDayIndex != null) break;
    }

    if (currentEventDayIndex != null) {
      targetIndex = currentEventDayIndex;
    } else {
      int todayIndexInList = -1;
      for (int dayIdx = 0; dayIdx < currentDatedEvents.length; dayIdx++) {
        final dayGroup = currentDatedEvents[dayIdx];
        if (dayGroup.dateTime != null &&
            dayGroup.dateTime!.year == now.year &&
            dayGroup.dateTime!.month == now.month &&
            dayGroup.dateTime!.day == now.day) {
          todayIndexInList = dayIdx;
          break;
        }
      }
      if (todayIndexInList != -1) {
        targetIndex = todayIndexInList;
      } else {
        targetIndex = 0;
      }
    }

    if (targetIndex < 0 || targetIndex >= currentDatedEvents.length) {
      targetIndex = currentDatedEvents.isNotEmpty ? 0 : 0;
    }
    return targetIndex;
  }


  @override
  Widget build(BuildContext context) {
    final bool isLargeScreen = MediaQuery.of(context).size.height > 860;

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

    final weekdays = List.generate(7, (i) {
      return DateFormat.E(context.locale.toString())
          .format(DateTime(2020, 1, 6 + i))
          .toUpperCase();
    });

    int currentTargetTabIndex = _calculateTargetTabIndex(datedEvents);

    final scheduleFeature = FeatureService.getFeatureDetails(FeatureConstants.schedule);
    final bool subScheduleIsEnabled = ((scheduleFeature is ScheduleFeature) && scheduleFeature.enableChildren);

    return Scaffold(
      backgroundColor: ThemeConfig.appBarColor(),
      body: SafeArea(
        top: true,
        bottom: false,
        child: DefaultTabController(
          key: ValueKey<String>("SchedulePage_TabController_${currentTargetTabIndex}_${datedEvents.length}"),
          initialIndex: currentTargetTabIndex,
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
                              TimeHelper.toggleTimeTravel?.call();
                              setState(() {});
                            }
                          },
                          child: Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: LogoWidget(height: 64, forceDark: true),
                          ),
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
                  for (var i = 0; i < datedEvents.length; i++)
                    DayList(
                      dayGroup: datedEvents[i],
                      onToggle: (id) => setState(
                              () => _openId = _openId == id ? null : id),
                      openId: _openId,
                      controller: AdvancedTimelineController(
                        events: _dots,
                        onEventPressed: _eventPressed,
                        showAddNewEventButton: () => (RightsService.isEditor() && subScheduleIsEnabled),
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
                        isUserApprover: _isUserApprover,
                        onScanButtonPressed: _handleScanButtonPressed,
                        onCompanionButtonPressed: _handleCompanionButtonPressed,
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

class _SliverToBoxAdapterDelegate extends SliverPersistentHeaderDelegate {
  final Widget child;
  final List<TimeBlockGroup> dayGroups;
  _SliverToBoxAdapterDelegate({required this.child, required this.dayGroups});

  @override double get minExtent => child is PreferredSizeWidget
      ? (child as PreferredSizeWidget).preferredSize.height
      : 62;
  @override double get maxExtent => minExtent;

  @override Widget build(BuildContext _, double __, bool ___) => child;

  @override
  bool shouldRebuild(_SliverToBoxAdapterDelegate old) {
    return old.child != child || !const ListEquality().equals(old.dayGroups, dayGroups);
  }
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