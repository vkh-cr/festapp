import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/timeline/schedule_tab_view.dart';
import 'package:fstapp/components/timeline/schedule_timeline_helper.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/DataExtensions.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/data_services/db_places.dart';
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
class SchedulePage extends StatefulWidget {
  static const ROUTE = "schedule";

  const SchedulePage({
    Key? key,
  }) : super(key: key);

  @override
  _SchedulePageState createState() => _SchedulePageState();
}

class _SchedulePageState extends State<SchedulePage>
    with WidgetsBindingObserver {
  final List<TimeBlockItem> _dots = [];
  final List<EventModel> _events = [];

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
    await loadOfflineData();

    await DbEvents.updateEvents(_events).whenComplete(() async {
      if (AppConfig.isSplitByPlace) {
        await loadPlacesForEvents(_events, DbPlaces.getPlacesIn);
      }
      _dots.clear();
      _dots.addAll(_events
          .filterRootEvents()
          .map((e) => TimeBlockItem.fromEventModel(e)));
    });
    await loadEventParticipants();
    await OfflineDataService.saveAllEvents(_events);
  }

  Future<void> loadEventParticipants() async {
    await DbEvents.loadEventsParticipantsAndStatus(_events);
    for (var e in _events.filterRootEvents()) {
      var dot = _dots.singleWhere((element) => element.id == e.id!);
      setState(() {
        dot.data["rightText"] = e.toString();
        dot.timeBlockType = TimeBlockHelper.getTimeBlockTypeFromModel(e);
      });
    }
  }

  Future<void> loadOfflineData() async {
    if (_events.isEmpty) {
      var offlineEvents = await OfflineDataService.getAllEvents();
      await OfflineDataService.updateEventsWithGroupName(offlineEvents);
      if (AppConfig.isSplitByPlace) {
        await loadPlacesForEvents(offlineEvents,
            (ids) async => (await OfflineDataService.getAllPlaces()));
      }
      _events.addAll(offlineEvents);
      _dots.clear();
      _dots.addAll(_events
          .filterRootEvents()
          .map((e) => TimeBlockItem.fromEventModel(e)));
      setState(() {});
    }
    if (AuthService.isLoggedIn()) {
      var userInfo = await OfflineDataService.getUserInfo();
      setState(() {
        userName = userInfo?.name ?? "";
      });
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
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 12, 12, 0),
            child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  GestureDetector(
                    onTap: () async {
                      RouterService.navigate(context, "${UnitPage.ROUTE}/${RightsService.currentUnit!.id!}");
                    },
                    onDoubleTap: () async {
                      var packageInfo = await PackageInfo.fromPlatform();
                      ToastHelper.Show(context,
                          "${packageInfo.appName} ${packageInfo.version}+${packageInfo.buildNumber}");
                      if (RightsService.isEditor()) {
                        setState(() {
                          TimeHelper.toggleTimeTravel?.call();
                        });
                      }
                    },
                    child: LogoWidget(width: 60,),
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
          Expanded(
            child: ScheduleTabView(
              key: _dots.isEmpty ? UniqueKey() : null,
              events: _dots,
              onEventPressed: _eventPressed,
              showAddNewEventButton: RightsService.isEditor,
              onAddNewEvent: (context, p, _) =>
                  AddNewEventDialog.showAddEventDialog(context, p)
                      .then((_) => loadData()),
            ),
          ),
        ],
      ),
    );
  }
}
