import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/data/DataExtensions.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/data/OfflineDataHelper.dart';
import 'package:fstapp/pages/EventPage.dart';
import 'package:fstapp/pages/MySchedulePage.dart';
import 'package:fstapp/widgets/Timetable.dart';
import 'package:fstapp/widgets/TimetableHelper.dart';

import '../models/EventModel.dart';

class ProgramViewPage extends StatefulWidget {
  static const ROUTE = "timetable";

  const ProgramViewPage.TimetablePage({Key? key}) : super(key: key);

  @override
  _ProgramViewPageState createState() => _ProgramViewPageState();
}

class _ProgramViewPageState extends State<ProgramViewPage>
    with TickerProviderStateMixin {
  TabController? _tabController;

  late TimetableController timetableController;

  @override
  void initState() {
    super.initState();
    timetableController = TimetableController(onItemTap: (id) {
      RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id")
          .then((value) => loadData());
    });
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  Future<void> loadData() async {
    loadDataOffline();

    await DataService.updateEvents(_events).whenComplete(() async {
      var places = await DataService.getAllPlaces();
      OfflineDataHelper.saveAllPlaces(places);
      var timetablePlaces = List<TimetablePlace>.from(places
          .where((element) => !element.isHidden)
          .map((x) => TimetablePlace(title: x.title!, id: x.id!)));
      _timetablePlaces.clear();
      _timetablePlaces.addAll(timetablePlaces);

      _items.clear();
      _items.addAll(_events
          .timetableEventsFilter(Timetable.minimalDurationMinutes)
          .map((e) => TimetableItem.fromEventModel(e)));
      _days.clear();
      var eventsGrouped = _events.groupListsBy((e) => e.startTime.weekday);
      _days.addAll({
        for (var e in eventsGrouped.values)
          e.first.startTime.weekday: TimetableDateFormat(e.first.startTime)
      });

      setupTabController(_days.length);
      await loadEventParticipants();
      await DataService.synchronizeMySchedule();
    });
  }

  String TimetableDateFormat(DateTime e) =>
      DateFormat("EEEE", context.locale.languageCode).format(e).toUpperCase();

  void setupTabController(int daysCount) {
    if (_tabController?.length != daysCount) {
      _tabController = TabController(vsync: this, length: daysCount);
    }
    _tabController!.addListener(() {
      setState(() {
        _currentIndex = _tabController!.index;
        timetableController.reset?.call();
      });
    });
  }

  void loadDataOffline() {
    var places = OfflineDataHelper.getAllPlaces();
    var timetablePlaces = List<TimetablePlace>.from(places
        .where((element) => !element.isHidden)
        .map((x) => TimetablePlace(title: x.title!, id: x.id!)));
    _timetablePlaces.clear();
    _timetablePlaces.addAll(timetablePlaces);

    if (_events.isEmpty) {
      var offlineEvents = OfflineDataHelper.getAllEvents();
      _events.addAll(offlineEvents);
      var eventsGrouped = _events.groupListsBy((e) => e.startTime.weekday);
      var days = {
        for (var e in eventsGrouped.values)
          e.first.startTime.weekday: TimetableDateFormat(e.first.startTime)
      };
      _days.addAll(days);
    }

    setupTabController(_days.length);
    OfflineDataHelper.updateEventsWithMySchedule(_events);
    OfflineDataHelper.updateEventsWithGroupName(_events);

    _items.clear();
    _items.addAll(_events
        .timetableEventsFilter(Timetable.minimalDurationMinutes)
        .map((e) => TimetableItem.fromEventModel(e)));
    setState(() {});
  }

  Future<void> loadEventParticipants() async {
    await DataService.loadEventsParticipantsAndStatus(_events);
    for (var e
        in _events.timetableEventsFilter(Timetable.minimalDurationMinutes)) {
      var item = _items.singleWhere((element) => element.id == e.id!);
      setState(() {
        item.text = e.toString();
        item.itemType = TimetableItem.getIndicatorFromEvent(e);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Schedule".tr()),
          leading: BackButton(
            onPressed: () => RouterService.goBackOrHome(context),
          ),
          bottom: PreferredSize(
            preferredSize: const Size.fromHeight(40),
            child: Builder(builder: (context) {
              if (_days.isEmpty) {
                return const SizedBox.shrink();
              }
              return Align(
                alignment: Alignment.centerLeft,
                child: TabBar(
                    controller: _tabController,
                    isScrollable: true,
                    tabs: List<Widget>.generate(
                        _days.length,
                        (i) => Padding(
                            padding: const EdgeInsets.all(12),
                            child: Text(
                              _days.values.toList()[i],
                            )))),
              );
            }),
          ),
          actions: [
            Padding(
              padding: const EdgeInsets.fromLTRB(6, 6, 6, 0),
              child: TextButton(
                onPressed: () async {
                  RouterService.navigateOccasion(context, MySchedulePage.ROUTE)
                      .then((value) => loadData());
                },
                child: FittedBox(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(
                        Icons.schedule,
                        color: Colors.white,
                      ),
                      Text("My schedule".tr(),
                          style: const TextStyle(
                              color: Colors.white, fontSize: 9)),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
        body: Timetable(
            controller: timetableController,
            items: _items
                .where((element) =>
                    element.startTime.weekday ==
                    _days.keys.toList()[_currentIndex])
                .toList(),
            timetablePlaces: _timetablePlaces));
  }

  final List<EventModel> _events = [];
  final List<TimetableItem> _items = [];
  final Map<int, String> _days = {};

  int _currentIndex = 0;
  final List<TimetablePlace> _timetablePlaces = [];
}
