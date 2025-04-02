import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/components/timeline/schedule_timeline_helper.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/pages/occasion/EventPage.dart';
import 'package:fstapp/pages/occasion/MySchedulePage.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/components/timetable/timetable.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/PopButton.dart';

@RoutePage()
class TimetablePage extends StatefulWidget {
  static const ROUTE = "timetable";

  const TimetablePage({super.key});

  @override
  _TimetablePageState createState() => _TimetablePageState();
}

class _TimetablePageState extends State<TimetablePage>
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
    await loadDataOffline();

    await DbEvents.updateEvents(_events);

    var placeIds = _events
        .map((e) => e.place?.id)
        .where((id) => id != null)
        .cast<int>()
        .toSet()
        .toList();

    var places = await DbPlaces.getPlacesIn(placeIds);

    var timetablePlaces = List<TimeBlockPlace>.from(places
        .where((element) => !element.isHidden)
        .map((x) => TimeBlockPlace.fromPlaceModel(x)));
    _timetablePlaces.clear();
    _timetablePlaces.addAll(timetablePlaces);

    _items.clear();
    _items.addAll(_events
        .timetableEventsFilter(Timetable.minimalDurationMinutes)
        .map((e) => TimeBlockItem.fromEventModelForTimeTable(e)));

    timetableController.rebuild?.call();

    _days.clear();
    _days.addAll(TimeBlockHelper.splitTimeBlocksByDate(_items, context, AppConfig.daySplitHour));
    setupTabController(_days);
    await loadEventParticipants();
    await DbEvents.synchronizeMySchedule();
  }

  String TimetableDateFormat(DateTime e) =>
      DateFormat("EEEE", context.locale.languageCode).format(e);

  void setupTabController(List<TimeBlockGroup> days) {
    _currentIndex ??= TimeHelper.getIndexFromDays(days.map((d)=>d.dateTime!.weekday));

    if (_tabController?.length != days.length) {
      _tabController = TabController(vsync: this, length: days.length, initialIndex: _currentIndex!);
    }
    _tabController!.animation?.removeListener(reactionOnIndexChanged);
    _tabController!.animation?.addListener(reactionOnIndexChanged);
    timetableController.reset?.call();
  }

  void reactionOnIndexChanged() {
    setState(() {
      _currentIndex = _tabController!.index;
      timetableController.reset?.call();
      timetableController.autoSetPosition?.call();
    });
  }

  Future<void> loadDataOffline() async {
    var places = await OfflineDataService.getAllPlaces();
    places.sortPlaces();
    var timetablePlaces = List<TimeBlockPlace>.from(places
        .where((element) => !element.isHidden)
        .map((x) => TimeBlockPlace.fromPlaceModel(x)));
    _timetablePlaces.clear();
    _timetablePlaces.addAll(timetablePlaces);

    if (_events.isEmpty) {
      var offlineEvents = await OfflineDataService.getAllEvents();
      _events.addAll(offlineEvents);
    }

    await OfflineDataService.updateEventsWithMySchedule(_events);
    await OfflineDataService.updateEventsWithGroupName(_events);

    _items.clear();
    var items = _events
        .timetableEventsFilter(Timetable.minimalDurationMinutes)
        .map((e) => TimeBlockItem.fromEventModelForTimeTable(e)).toList();

    _days.clear();
    _days.addAll(TimeBlockHelper.splitTimeBlocksByDate(items, context, AppConfig.daySplitHour));
    setupTabController(_days);
    setState(() {});
  }

  Future<void> loadEventParticipants() async {
    await DbEvents.loadEventsParticipantsAndStatus(_events);
    for (var e in _events.timetableEventsFilter(Timetable.minimalDurationMinutes)) {
      var item = _items.singleWhere((element) => element.id == e.id!);
      setState(() {
        item.data = e.toString();
        item.timeBlockType = TimeBlockHelper.getTimeBlockTypeFromModel(e);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ThemeConfig.timetableBackgroundOutside(context),
        appBar: AppBar(
          title: Text("Schedule".tr()),
          leading: PopButton(),
          bottom: PreferredSize(
            preferredSize: const Size.fromHeight(40),
            child: Builder(builder: (context) {
              if (_days.isEmpty || _events.isEmpty) {
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
                              _days[i].title.toUpperCase(),
                            )))),
              );
            }),
          ),
        ),
        body: _days.isEmpty || _events.isEmpty ? SizedBox.shrink() : Timetable(
            controller: timetableController,
            items: _days[_currentIndex??0].events,
            timetablePlaces: _timetablePlaces,
            occasionEnd: RightsService.currentOccasion!.endTime,));
  }

  final List<EventModel> _events = [];
  final List<TimeBlockItem> _items = [];
  final List<TimeBlockGroup> _days = [];

  int? _currentIndex;
  final List<TimeBlockPlace> _timetablePlaces = [];
}
