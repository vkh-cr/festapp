import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/schedule_feature.dart';
import 'package:fstapp/components/timeline/advanced_timeline_controller.dart';
import 'package:fstapp/components/timeline/advanced_timeline_day_list.dart';
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

  bool? _isAdvancedTimeline = false;
  int? _openId;

  @override
   void didChangeDependencies() {
      super.didChangeDependencies();
      var scheduleFeat = FeatureService.getFeatureDetails(ScheduleFeature.metaSchedule);
      if (scheduleFeat is ScheduleFeature && scheduleFeat.scheduleType == ScheduleFeature.scheduleTypeAdvanced){
        _isAdvancedTimeline = false;
      }
      loadData();
   }

   Future<void> loadData() async {
    await loadDataOffline();
    var data = await DbEvents.getMyEventsAndActivities(RightsService.currentOccasionId()!, false);
    if (_isAdvancedTimeline??false) {
      _dots = data!.events.map((e) => TimeBlockItem.fromEventModel(e)).toList();
    } else {
      _dots = data!.events.map((e) => TimeBlockItem.fromEventModelAsChild(e)).toList();
    }
    setState(() {});

    await DbEvents.synchronizeMySchedule();
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
    } else {
      _dots = _events.map((e) => TimeBlockItem.fromEventModelAsChild(e)).toList();
    }

    setState(() {});
   }

  Future<void> _handleSignIn(int id) async {
    await DbEvents.signInToEvent(context, id);
    await loadData(); // Reload data to reflect changes
  }

  Future<void> _handleSignOut(int id) async {
    await DbEvents.signOutFromEvent(context, id);
    await loadData(); // Reload data to reflect changes
  }

  Future<void> _handleAdd(int id) async {
    await DbEvents.addToMySchedule(context, id);
    await loadData(); // Reload data to reflect changes
  }

  Future<void> _handleRemove(int id) async {
    await DbEvents.removeFromMySchedule(context, id);
    await loadData(); // Reload data to reflect changes
  }

  void _eventPressed(int id) {
    RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id")
        .then((_) => loadData());
  }

  void _goToMap(int placeId) {
    RouterService.navigateOccasion(context, "${MapPage.ROUTE}/$placeId")
        .then((_) => loadData());
  }


   @override
   Widget build(BuildContext context) {
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
           customSplitter: TimeBlockHelper.splitTimeBlocksByDay
         ),
       openId: _openId,
       onToggle: (id) => setState(
               () => _openId = _openId == id ? null : id),) :
     SingleChildScrollView(
         child: ScheduleTimeline(
           eventGroups: TimeBlockHelper.splitTimeBlocksByDay(_dots!, context),
           onEventPressed: _eventPressed,
           nodePosition: 0.3,
           emptyContent: Center(
             child: Padding(
               padding: const EdgeInsets.fromLTRB(24, 88, 24, 24),
               child: const Text(
                 "There will appear your events.",
                 style: TextStyle(fontSize: 20),
               ).tr(),
             ),
           ),
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