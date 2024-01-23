import 'package:avapp/data/DataService.dart';
import 'package:avapp/pages/ProgramPage.dart';
import 'package:avapp/services/NavigationHelper.dart';
import 'package:avapp/widgets/TimeTable.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../models/EventModel.dart';

class ProgramViewPage extends StatefulWidget {
  static const ROUTE = "/programView";

  const ProgramViewPage({Key? key}) : super(key: key);

  @override
  _ProgramViewPageState createState() => _ProgramViewPageState();
}

class _ProgramViewPageState extends State<ProgramViewPage>
    with TickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    loadData();
  }

  Future<void> loadData() async {
    await DataService.updateEvents(_events).whenComplete(() async {
      var places = await DataService.getTimetablePlaces();
      _timetablePlaces.clear();
      _timetablePlaces.addAll(places);

      _items.clear();
      _items.addAll(_events
          .where((element) => element.place!.id != null)
          .map((e) => TimetableItem.fromEventModel(e)));
      _days.clear();
      var eventsGrouped = _events.groupListsBy((e) => e.startTime.weekday);
      _days.addAll({
        for (var e in eventsGrouped.values)
          e.first.startTime.weekday:
              DateFormat("EEE d. MMM", context.locale.languageCode)
                  .format(e.first.startTime)
                  .toUpperCase()
      });

      _tabController = TabController(vsync: this, length: _days.length);
      _tabController.addListener(() {
        setState(() {
          _currentIndex = _tabController.index;
        });
      });
      await loadEventParticipants();
    });
  }

  Future<void> loadEventParticipants() async {
    await DataService.loadEventsParticipantsAndStatus(_events);
    for (var e in _events.where((element) => element.place!.id != null)) {
      var dot = _items.singleWhere((element) => element.id == e.id!);
      setState(() {
        dot.text = e.toString();
        dot.itemType = TimetableItem.getIndicatorFromEvent(e);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Schedule".tr()),
        leading: BackButton(
          onPressed: () => NavigationHelper.goBackOrHome(context),
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
            padding: const EdgeInsets.all(6),
            child: TextButton(
              onPressed: () async {
                context.push(ProgramPage.ROUTE);
              },
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(
                    Icons.schedule,
                    color: Colors.white,
                  ),
                  Text("My schedule".tr(),
                      style: const TextStyle(color: Colors.white, fontSize: 9)),
                ],
              ),
            ),
          ),
        ],
      ),
      body: TimeTable(
          items: _items
              .where((element) =>
                  element.startTime.weekday ==
                  _days.keys.toList()[_currentIndex])
              .toList(),
          timetablePlaces: _timetablePlaces),
    );
  }

  final List<EventModel> _events = [];
  final List<TimetableItem> _items = [];
  final Map<int, String> _days = {};

  int _currentIndex = 0;
  final List<TimetablePlace> _timetablePlaces = [];
}
