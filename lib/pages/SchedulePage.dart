import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/components/timeline/ScheduleTabView.dart';
import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/EventPage.dart';
import 'package:fstapp/pages/LoginPage.dart';
import 'package:fstapp/pages/MySchedulePage.dart';
import 'package:fstapp/pages/TimetablePage.dart';
import 'package:fstapp/pages/UserPage.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/themeConfig.dart';
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

class _SchedulePageState extends State<SchedulePage> with WidgetsBindingObserver {
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
      if(AppConfig.isSplitByPlace) {
        await loadPlacesForEvents(_events, DbPlaces.getPlacesIn);
      }
      _dots.clear();
      _dots.addAll(_events.filterRootEvents().map((e) => TimeBlockItem.fromEventModel(e)));
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
      if(AppConfig.isSplitByPlace) {
        await loadPlacesForEvents(offlineEvents, (ids) async => (await OfflineDataService.getAllPlaces()));
      }
      _events.addAll(offlineEvents);
      _dots.clear();
      _dots.addAll(_events.filterRootEvents().map((e) => TimeBlockItem.fromEventModel(e)));
      setState(() {});
    }
    if (AuthService.isLoggedIn()) {
      var userInfo = await OfflineDataService.getUserInfo();
      setState(() {
        userName = userInfo?.name??"";
      });
    }
  }

  Future<void> loadPlacesForEvents(List<EventModel> events, Future<List<PlaceModel>> Function(List<int>) fetchPlaces) async {
    var placeIds = events.map((e) => e.place?.id).where((id) => id != null).cast<int>().toSet().toList();
    var places = await fetchPlaces(placeIds);
    var placesById = {for (var place in places) place.id: place};

    for (var event in events) {
      if (event.place?.id != null && placesById.containsKey(event.place!.id)) {
        event.place = placesById[event.place!.id];
      }
    }
  }

  void _schedulePressed() {
    RouterService.navigateOccasion(context, ProgramViewPage.ROUTE).then((value) => loadData());
  }

  void _eventPressed(int id) {
    RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id").then((_) => loadData());
  }

  @override
  Widget build(BuildContext context) {
    final logoAsset = ThemeConfig.isDarkMode(context)
        ? 'assets/icons/fstapplogo.dark.svg' // Dark mode logo
        : 'assets/icons/fstapplogo.svg'; // Light mode logo
    return SafeArea(
      top: true,
      bottom: false,
      left: false,
      right: false,
      child: Column(
        mainAxisSize: MainAxisSize.max,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 0, 12, 0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                GestureDetector(
                  onDoubleTap: () async {
                    var packageInfo = await PackageInfo.fromPlatform();
                    ToastHelper.Show(context, "${packageInfo.appName} ${packageInfo.version}+${packageInfo.buildNumber}");
                    if(RightsService.isEditor()) {
                      setState(() {
                        TimeHelper.toggleTimeTravel?.call();
                      });
                    }
                  },
                  child: SvgPicture.asset(
                    width: 200,
                    semanticsLabel: 'Festapp logo',
                    logoAsset,
                  ),
                ),
                const Spacer(),
                Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    CircularButton(
                      onPressed: _schedulePressed,
                      backgroundColor: ThemeConfig.profileButtonColor(context),
                      child: Icon(Icons.calendar_month, color: ThemeConfig.profileButtonTextColor(context)),
                    ),
                    Text("My schedule".tr()),
                  ]
                ),
              ]
            ),
          ),
          Expanded(
            child: ScheduleTabView(
              key: _dots.isEmpty ? UniqueKey() : null,
              events: _dots,
              onEventPressed: _eventPressed,
            ),
          ),
        ],
      ),
    );
  }
}