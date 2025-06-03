import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/activities/activity_data_helper.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/schedule_feature.dart';
import 'package:fstapp/components/timeline/advanced_timeline_controller.dart';
import 'package:fstapp/components/timeline/advanced_timeline_day_list.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/occasion/event_edit_page.dart';
import 'package:fstapp/pages/occasion/map_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/components/timeline/schedule_timeline.dart';
import 'package:fstapp/pages/occasion/event_page.dart';
import 'package:fstapp/app_router.gr.dart'; // Added for CheckRoute
import 'package:fstapp/dialogs/companion_dialog.dart'; // Added for CompanionDialog
import 'package:fstapp/data_services/db_companions.dart'; // Added for DbCompanions
import 'package:fstapp/data_models/companion_model.dart'; // Added for CompanionModel

import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';

@RoutePage()
class MySchedulePage extends StatefulWidget {
  static const ROUTE = "myschedule";

  const MySchedulePage({super.key});

  @override
  _MySchedulePageState createState() => _MySchedulePageState();
}

class _MySchedulePageState extends State<MySchedulePage> {

  bool _fullEventsLoaded = false;
  bool? _isAdvancedTimeline = false;
  final Map<int, String?> _eventDescriptions = {};
  int? _openId;

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    var scheduleFeat = FeatureService.getFeatureDetails(ScheduleFeature.metaSchedule);
    if (scheduleFeat is ScheduleFeature && scheduleFeat.scheduleType == ScheduleFeature.scheduleTypeAdvanced){
      _isAdvancedTimeline = true;
    }
    await loadDataOffline();
    loadData();
  }

  MyEventsBundle? _data;

  Future<void> _loadFullData() async {
    _data = await DbEvents.getMyEventsAndActivities(RightsService.currentOccasionId()!, true);
    for (var e in _data!.events) {
      if (e.id != null) _eventDescriptions[e.id!] = e.description;
    }
    _fullEventsLoaded = true;
  }

  Future<void> loadData() async {
    if(!AuthService.isLoggedIn()){
      return;
    }
    if (!_fullEventsLoaded) {
      await _loadFullData();
    } else {
      _data = await DbEvents.getMyEventsAndActivities(RightsService.currentOccasionId()!, false);
      for (var e in _data!.events) {
        if (e.id != null && _eventDescriptions.containsKey(e.id!)) {
          e.description = _eventDescriptions[e.id!];
        }
      }
    }

    if (_isAdvancedTimeline ?? false) {
      _dots = _data!.events.map((e) => TimeBlockItem.fromEventModel(e)).toList();
      var actDots = ActivityDataHelper.activitiesToTimeBlocks(_data!.activities);
      _dots!.addAll(actDots);
    } else {
      _dots = _data!.events.map((e) => TimeBlockItem.fromEventModelAsChild(e)).toList();
    }

    _dots!.sort((a, b) => a.startTime.compareTo(b.startTime));
    setState(() {});

    await DbEvents.synchronizeMySchedule(currentIds: _data!.events.map((e)=>e.id!).toList());
  }

  Future<void> loadDataOffline() async {
    var offlineEvents = await OfflineDataService.getAllEvents();
    await OfflineDataService.updateEventsWithMySchedule(offlineEvents);
    await OfflineDataService.updateEventsWithGroupName(offlineEvents);
    var userInfo = await OfflineDataService.getUserInfo();

    var myEvents = offlineEvents.where((e) =>
    e.isEventInMySchedule == true ||
        ((e.isGroupEvent ?? false) && (userInfo?.hasGroup() ?? false)) ||
        (e.isSignedIn ?? false));

    _events.clear();
    _events.addAll(myEvents);

    if (_isAdvancedTimeline??false) {
      _dots = _events.map((e) => TimeBlockItem.fromEventModel(e)).toList();
      var activities = await OfflineDataService.getAllActivities();
      var actDots = ActivityDataHelper.activitiesToTimeBlocks(activities);
      _dots!.addAll(actDots);
    } else {
      _dots = _events.map((e) => TimeBlockItem.fromEventModelAsChild(e)).toList();
    }

    _dots!.sort((a, b) => a.startTime.compareTo(b.startTime));

    setState(() {});
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
              final currentItem = _dots?.firstWhereOrNull((element) => element.id == timeBlockItem.id);
              return currentItem?.canSignIn() ?? false;
            },
          );
        });
      },
    );
  }


  @override
  Widget build(BuildContext context) {
    final Widget commonEmptyContent = Center(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(24, 88, 24, 24),
        child: const Text(
          "There will appear your events.",
          style: TextStyle(fontSize: 20),
        ).tr(),
      ),
    );

    Widget body = (_isAdvancedTimeline == true) ?
    DayList(dayGroup: TimeBlockGroup(title: "", events: _dots!),
      controller: AdvancedTimelineController(
        events: _dots!,
        onEventPressed: _eventPressed,
        showAddNewEventButton: RightsService.isEditor,
        onSignInEvent: _handleSignIn,
        onSignOutEvent: _handleSignOut,
        onAddToProgramEvent: _handleAdd,
        onRemoveFromProgramEvent: _handleRemove,
        onEditEvent: (c, ev) => RouterService
            .navigateOccasion(
            context, "${EventEditPage.ROUTE}/$ev")
            .then((_) => loadData()),
        onPlaceTap: (c, pl) => _goToMap(pl.id),
        customSplitter: TimeBlockHelper.splitTimeBlocksByDay,
        animateEventRemoval: true,
        emptyContent: commonEmptyContent,
        isUserApprover: _isUserApprover,
        onScanButtonPressed: _handleScanButtonPressed,
        onCompanionButtonPressed: _handleCompanionButtonPressed,
      ),
      openId: _openId,
      onToggle: (id) => setState(
              () => _openId = _openId == id ? null : id),) :
    SingleChildScrollView(
        child: ScheduleTimeline(
          eventGroups: TimeBlockHelper.splitTimeBlocksByDay(_dots!, context),
          onEventPressed: _eventPressed,
          nodePosition: 0.3,
          emptyContent: commonEmptyContent,
        ));

    return Scaffold(
        appBar: AppBar(
          title: Text("My schedule", style: TextStyle(color: ThemeConfig.appBarColorNegative())).tr(),
          leading: BackButton(
            color: ThemeConfig.appBarColorNegative(),
            onPressed: () => RouterService.popOrHome(context),
          ),
        ),
        body: Align(
            alignment: Alignment.topCenter,
            child:
            _dots == null ?
            Center(child: CircularProgressIndicator()) :
            ConstrainedBox(
                constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
                child: body)));
  }

  final List<EventModel> _events = [];
  List<TimeBlockItem>? _dots = [];

}