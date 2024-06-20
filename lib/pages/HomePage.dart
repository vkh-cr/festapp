import 'dart:async';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/dataServices/OfflineDataHelper.dart';
import 'package:fstapp/dataServices/RightsHelper.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/pages/EventPage.dart';
import 'package:fstapp/pages/InfoPage.dart';
import 'package:fstapp/pages/LoginPage.dart';
import 'package:fstapp/pages/MapPage.dart';
import 'package:fstapp/pages/NewsPage.dart';
import 'package:fstapp/pages/SongPage.dart';
import 'package:fstapp/pages/TimetablePage.dart';
import 'package:fstapp/pages/UserPage.dart';
import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/tests/DataServiceTests.dart';
import 'package:fstapp/components/timeline/ScheduleTabView.dart';
import 'package:badges/badges.dart' as badges;
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/pages/MySchedulePage.dart';
import 'package:package_info_plus/package_info_plus.dart';




class HomePage extends StatefulWidget {
  static const HOME_PAGE = AppConfig.appName;

  const HomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with WidgetsBindingObserver {
  String userName = "";

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
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

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
        body: SafeArea(
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: <Widget>[
              Padding(
                  padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      GestureDetector(
                        onDoubleTap: () async {
                          var packageInfo = await PackageInfo.fromPlatform();
                          ToastHelper.Show(
                              "${packageInfo.appName} ${packageInfo.version}+${packageInfo.buildNumber}");
                          if(RightsHelper.isEditor()) {
                            setState(() {
                              TimeHelper.toggleTimeTravel?.call();
                            });
                          }
                        },
                        child: SvgPicture.asset(
                          height: 112,
                          semanticsLabel: 'Festapp logo',
                          'assets/icons/fstapplogo.svg',
                        ),
                      ),
                      const Spacer(),
                      Visibility(
                        visible: !DataService.isLoggedIn(),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Column(
                              mainAxisSize: MainAxisSize.min,
                              children: <Widget>[
                                CircularButton(
                                  onPressed: _loginPressed,
                                  backgroundColor: AppConfig.button1Color,
                                  child: const Icon(Icons.login),
                                ),
                                Text("Sign in".tr()),
                              ],
                            ),
                          ],
                        ),
                      ),
                      Visibility(
                        visible: DataService.isLoggedIn(),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Column(
                              mainAxisSize: MainAxisSize.min,
                              children: <Widget>[
                                CircularButton(
                                  onPressed: _profileButtonPressed,
                                  backgroundColor: AppConfig.profileButtonColor,
                                  child: const Icon(Icons.account_circle_rounded),
                                ),
                                Text(userName),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ],
                  )),
              Expanded(
                  child: ScheduleTabView(
                    events: _dots,
                    onEventPressed: _eventPressed,
                  )),
              Padding(
                padding: const EdgeInsets.only(bottom: 6.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        MainPageButton(
                          onPressed: _programPressed,
                          backgroundColor: AppConfig.button1Color,
                          child: const Icon(Icons.calendar_month),
                        ),
                        Text("My schedule".tr()),
                      ],
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        badges.Badge(
                          showBadge: showMessageCount(),
                          badgeContent: SizedBox(
                              width: 20,
                              height: 20,
                              child: Center(
                                child: Text(messageCountString(),
                                    style: const TextStyle(
                                        color: Colors.white, fontSize: 16)),
                              )),
                          child: MainPageButton(
                            onPressed: _newsPressed,
                            backgroundColor: AppConfig.button2Color,
                            child: const Icon(Icons.newspaper),
                          ),
                        ),
                        const Text("News").tr(),
                      ],
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        MainPageButton(
                          onPressed: _mapPressed,
                          backgroundColor: AppConfig.button3Color,
                          child: const Icon(Icons.map),
                        ),
                        Text("Map".tr()),
                      ],
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        MainPageButton(
                          onPressed: _infoPressed,
                          backgroundColor: AppConfig.button4Color,
                          child: const Icon(Icons.info),
                        ),
                        Text("Info".tr()),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ));
  }

  void _programPressed() {
    if (!AppConfig.isOwnProgramSupported && !DataService.isLoggedIn()) {
      ToastHelper.Show("Sign in to view My schedule!".tr());
      return;
    }
    RouterService.navigateOccasion(context, ProgramViewPage.ROUTE).then((value) => loadData());
  }

  Future<void> _newsPressed() async {
    RouterService.navigateOccasion(context, NewsPage.ROUTE).then((value) => loadData());
  }

  void _infoPressed() {
    RouterService.navigateOccasion(context, InfoPage.ROUTE).then((value) => loadData());
  }

  void _mapPressed() {
    RouterService.navigateOccasion(context, MapPage.ROUTE).then((value) => loadData());
  }

  void _loginPressed() {
    RouterService.navigate(context, LoginPage.ROUTE).then((value) => loadData());
  }

  void _profileButtonPressed() {
    RouterService.navigateOccasion(context, UserPage.ROUTE).then((value) => loadData());
  }

  _eventPressed(int id) {
    RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id").then((value) => loadData());
  }

  final List<TimeLineItem> _dots = [];
  final List<EventModel> _events = [];

  Future<void> loadEventParticipants() async {
    // update sign in status / current participants for events
    await DataService.loadEventsParticipantsAndStatus(_events);
    for (var e in _events.filterRootEvents()) {
      var dot = _dots.singleWhere((element) => element.id == e.id!);
      setState(() {
        dot.rightText = e.toString();
        dot.dotType = TimeLineItem.getIndicatorFromEvent(e);
      });
    }
    setState(() {});
  }

  int _messageCount = 0;

  bool showMessageCount() => _messageCount > 0;

  String messageCountString() =>
      _messageCount < 100 ? _messageCount.toString() : "99";

  Future<void> loadData() async {
    //DataServiceTests.test_update_user();
    //await DataService.ImportFromSingleToMultipleEventType();
    //DataServiceTests.test_has_event_allowed_role();

    loadOfflineData();
    await RightsHelper.ensureAccessProcedure(context);

    if (DataService.isLoggedIn()) {
      DataService.getCurrentUserInfo()
          .then((value) => userName = value.name!);
    }

    await DataService.updateEvents(_events).whenComplete(() async {
      if(AppConfig.isSplitByPlace)
      {
        await loadPlacesForEvents(_events, DataService.getPlacesIn);
      }
      _dots.clear();
      _dots.addAll(_events.filterRootEvents().map((e) => TimeLineItem.fromEventModel(e, AppConfig.isSplitByPlace)));
      if (DataService.isLoggedIn()) {
        DataService.countNewMessages().then((value) => {
          setState(() {
            _messageCount = value;
          })
        });
      }
    });
    await loadEventParticipants();
    OfflineDataHelper.saveAllEvents(_events);
  }

  FutureOr<void> loadPlacesForEvents(List<EventModel> events, FutureOr<List<PlaceModel>> Function(List<int>) fetchPlaces) async {
    var placeIds = events
        .map((e) => e.place?.id)
        .where((id) => id != null)
        .cast<int>()
        .toSet()
        .toList();

    var places = await fetchPlaces(placeIds);

    var placesById = {for (var place in places) place.id: place};

    // Assign the loaded places to the corresponding events
    for (var event in events) {
      if (event.place?.id != null && placesById.containsKey(event.place!.id)) {
        event.place = placesById[event.place!.id];
      }
    }
  }

  Future<void> loadOfflineData() async {
    if (_events.isEmpty) {
      var offlineEvents = OfflineDataHelper.getAllEvents();
      OfflineDataHelper.updateEventsWithGroupName(offlineEvents);
      if(AppConfig.isSplitByPlace) {
        await loadPlacesForEvents(offlineEvents, (ids) => OfflineDataHelper.getAllPlaces());
      }
      _events.addAll(offlineEvents);
      _dots.clear();
      _dots.addAll(_events.filterRootEvents().map((e) => TimeLineItem.fromEventModel(e, AppConfig.isSplitByPlace)));
    }
    if (DataService.isLoggedIn()) {
      var userInfo = OfflineDataHelper.getUserInfo();
      setState(() {
        userName = userInfo?.name??"";
      });
    }
  }
}