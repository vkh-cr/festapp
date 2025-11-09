import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/timeline/schedule_tab_view.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/data_extensions.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/dialogs/add_new_event_dialog.dart';
import 'package:fstapp/pages/occasion/my_schedule_page.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/pages/occasion/event_page.dart';
import 'package:fstapp/pages/occasion/timetable_page.dart';
import 'package:fstapp/pages/unit/unit_page.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/logo_widget.dart';
import 'package:package_info_plus/package_info_plus.dart';

@RoutePage()
class ScheduleBasicPage extends StatefulWidget {
  static const ROUTE = "scheduleBasic";

  const ScheduleBasicPage({super.key});

  @override
  _ScheduleBasicPageState createState() => _ScheduleBasicPageState();
}

class _ScheduleBasicPageState extends State<ScheduleBasicPage>
    with WidgetsBindingObserver {
  static bool _isLoading = false;
  static bool _fullDataGloballyLoaded = false;

  List<TimeBlockItem> _dots = [];
  List<EventModel> _events = [];
  static final Map<int, String?> _eventDescriptions = {};
  String? userName;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    loadData();
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
    super.dispose();
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
      if (mounted) {
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  Future<void> _loadOfflineDataThenFast() async {
    if (_events.isEmpty) {
      final offline = await OfflineDataService.getAllEvents();
      await OfflineDataService.updateEventsWithGroupName(offline);
      await loadPlacesForEvents(offline,
              (ids) async => (await OfflineDataService.getAllPlaces()));

      if (AuthService.isLoggedIn()) {
        var userInfo = await OfflineDataService.getUserInfo();
        userName = userInfo?.name ?? "";
      }
      _events = offline;
      for (var e in _events) {
        if (e.id != null) _eventDescriptions[e.id!] = e.description;
      }
      _dots = _events
          .filterRootEvents()
          .map((e) => TimeBlockItem.fromEventModelBasicTimeline(e))
          .toList();
    }

    if (mounted) {
      setState(() {});
    }

    final fast = await DbEvents.getAllEvents(
      RightsService.currentOccasionId()!,
      false,
    );

    for (var e in fast) {
      if (e.id != null && _eventDescriptions.containsKey(e.id!)) {
        e.description = _eventDescriptions[e.id!];
      }
    }

    _events = fast;

    _dots = _events
        .filterRootEvents()
        .map((e) => TimeBlockItem.fromEventModelBasicTimeline(e))
        .toList();

    if (mounted) {
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

    _dots = _events
        .filterRootEvents()
        .map((e) => TimeBlockItem.fromEventModelBasicTimeline(e))
        .toList();
    await OfflineDataService.saveAllEvents(_events);
    if (mounted) {
      setState(() {});
    }
  }


  Future<void> loadPlacesForEvents(List<EventModel> events,
      Future<List<PlaceModel>> Function(List<int>) fetchPlaces) async {
    var placeIds = events
        .map((e) => e.place?.id)
        .where((id) => id != null)
        .cast<int>()
        .toSet()
        .toList();
    if(placeIds.isEmpty) return;
    var places = await fetchPlaces(placeIds);
    var placesById = {for (var place in places) place.id: place};

    for (var event in events) {
      if (event.place?.id != null && placesById.containsKey(event.place!.id)) {
        event.place = placesById[event.place!.id];
      }
    }
  }

  void _schedulePressed() {
    RouterService.navigateOccasion(context, TimetablePage.ROUTE)
        .then((value) => loadData());
  }

  void _mySchedulePressed() {
    RouterService.navigateOccasion(context, MySchedulePage.ROUTE)
        .then((value) => loadData());
  }

  void _eventPressed(int id) {
    RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id")
        .then((_) => loadData());
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      top: true,
      bottom: false,
      left: false,
      right: false,
      child: Column(
        mainAxisSize: MainAxisSize.max,
        children: <Widget>[
          Container(
            color: ThemeConfig.logoBackgroundColor(context),
            child: SafeArea(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(12, 0, 12, 0),
                child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      GestureDetector(
                        onTap: () async {
                          RouterService.navigate(context, "${UnitPage.ROUTE}/${RightsService.currentUnit()!.id!}");
                        },
                        onDoubleTap: () async {
                          var packageInfo = await PackageInfo.fromPlatform();
                          ToastHelper.Show(context,
                              "${packageInfo.appName} ${packageInfo.version}+${packageInfo.buildNumber}");
                          if (RightsService.isEditor()) {
                            TimeHelper.toggleTimeTravel?.call();
                            setState(() {});
                          }
                        },
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: LogoWidget(width: 120,),
                        ),
                      ),
                      const Spacer(),
                      if(FeatureService.isFeatureEnabled(FeatureConstants.mySchedule))
                        Column(mainAxisSize: MainAxisSize.min, children: <Widget>[
                          CircularButton(
                            onPressed: _mySchedulePressed,
                            backgroundColor: ThemeConfig.profileButtonColor(context),
                            child: Icon(Icons.favorite,
                                color: ThemeConfig.profileButtonTextColor(context)),
                          ),
                          Text("My schedule".tr()),
                        ]),
                      if(FeatureService.isFeatureEnabled(FeatureConstants.timetable))
                        Column(mainAxisSize: MainAxisSize.min, children: <Widget>[
                          CircularButton(
                            onPressed: _schedulePressed,
                            backgroundColor: ThemeConfig.profileButtonColor(context),
                            child: Icon(Icons.calendar_month,
                                color: ThemeConfig.profileButtonTextColor(context)),
                          ),
                          Text("Schedule".tr()),
                        ]),
                    ]),
              ),
            ),
          ),
          Expanded(
            child: ScheduleTabView(
              key: _dots.isEmpty ? UniqueKey() : ValueKey(_dots.length),
              events: _dots,
              onEventPressed: _eventPressed,
              showAddNewEventButton: RightsService.isEditor,
              onAddNewEvent: (context, p, _) =>
                  AddNewEventDialog.showAddEventDialog(context, p)
                      .then((_) => loadData()),
              defaultDateTime: RightsService.currentOccasion()?.startTime,
            ),
          ),
        ],
      ),
    );
  }
}