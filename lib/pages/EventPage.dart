import 'package:avapp/data/OfflineDataHelper.dart';
import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/pages/HtmlEditorPage.dart';
import 'package:avapp/data/DataService.dart';
import 'package:avapp/router.dart';
import 'package:avapp/services/DialogHelper.dart';
import 'package:avapp/services/NavigationHelper.dart';
import 'package:avapp/widgets/ButtonsHelper.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:avapp/appConfig.dart';
import 'package:go_router/go_router.dart';

import '../models/EventModel.dart';
import '../models/UserGroupInfoModel.dart';
import '../services/ToastHelper.dart';
import '../styles/Styles.dart';
import '../widgets/HtmlView.dart';
import '../widgets/ScheduleTimeline.dart';
import 'MapPage.dart';

class EventPage extends StatefulWidget {
  static const ROUTE = "event";
  int? id;
  EventPage({this.id, super.key});

  @override
  _EventPageState createState() => _EventPageState();
}

class _EventPageState extends State<EventPage> {
  final List<TimeLineItem> _childDots = [];
  EventModel? _event;
  UserGroupInfoModel? _groupInfoModel;

  List<UserInfoModel> _participants = [];
  List<UserInfoModel> _queriedParticipants = [];
  bool isLoadingParticipants = true;

  _EventPageState();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData(widget.id!);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_event==null?"Event".tr():_event.toString()),
        leading: BackButton(
          onPressed: () => NavigationHelper.goBackOrHome(context),
        ),
        actions: ButtonsHelper.getAddToMyProgramButton(
          _event?.canSaveEventToMyProgram(),
          addToMySchedule,
          removeFromMySchedule
        )),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: appMaxWidth),
          child: SingleChildScrollView(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                    Visibility(
                        visible: showLoginLogoutButton() &&
                            !_participants.any(
                                (p) => DataService.currentUserId() == p.id),
                        child: ElevatedButton(
                            onPressed: () => signIn(),
                            child: const Text("Sign in").tr())),
                    Visibility(
                        visible: showLoginLogoutButton() &&
                            _participants.any(
                                (p) => DataService.currentUserId() == p.id),
                        child: ElevatedButton(
                            onPressed: () => signOut(),
                            child: const Text("Sign out").tr())),
                    Visibility(
                      visible: showLoginLogoutButton() && (DataService.isEditor()),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: ElevatedButton(
                            onPressed: () async {
                              _queriedParticipants = await DataService.getAllUsersBasics();
                              _queriedParticipants.forEach((q) => {
                                    if (_participants.any((p) => p.id == q.id))
                                      {q.isSignedIn = true}
                                  });

                                // ignore: use_build_context_synchronously
                              DialogHelper.chooseUser(context, (person) async {
                                await signIn(person);
                                await loadData(_event!.id!);
                              }, _queriedParticipants, "Sign in someone".tr());
                              },
                              child: const Text("Sign in other").tr()),
                        ),
                      ),
                      Visibility(
                          visible: DataService.isEditor() ||
                              (DataService.isGroupLeader() && _event != null && _event!.isGroupEvent),
                          child: ElevatedButton(
                              onPressed: () => RouterService.navigate(context, HtmlEditorPage.ROUTE, extra: _event!.description).then((value) async {
                                if(value != null)
                                {
                                  var changed = value as String;
                                  if(_groupInfoModel!=null)
                                  {
                                    _groupInfoModel!.description = changed;
                                    await DataService.updateUserGroupInfo(_groupInfoModel!);
                                  }
                                  else{
                                    setState(() {
                                      _event!.description = changed;
                                    });
                                    await DataService.updateEvent(_event!);
                                  }
                                  await loadData(_event!.id!);
                                  ToastHelper.Show("Content has been changed.".tr());
                                }
                              }),
                              child: const Text("Edit content").tr()))
                    ]),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Container(
                      alignment: Alignment.topRight,
                      child: Text(_event?.durationString(context)??"", style: normalTextStyle),
                    ),
                  ),
                  Visibility(
                      visible: _event?.place != null,
                      child: Container(
                          padding: const EdgeInsets.all(8.0),
                          alignment: Alignment.topRight,
                          child: TextButton(
                              onPressed: () => RouterService.navigate(context, "${MapPage.ROUTE}/${_event!.place!.id}").then((value) => loadData(_event!.id!)),
                              child: Text("Place".tr() + ": ${_event?.place?.title??""}", style: normalTextStyle,))
                      )),
                  Visibility(
                      visible: EventModel.canSignIn(_event) && !DataService.isLoggedIn(),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: const Text(
                          "You need to sign in to this event. First, sign in to the app.",
                          style: TextStyle(color: AppConfig.attentionColor),).tr(),
                      )),
                  Visibility(
                    visible: _event != null && _event?.description != null,
                    child: Padding(
                      padding: const EdgeInsets.all(12.0),
                      child:  HtmlView(html: _event?.description ?? ""),
                    ),
                  ),
                  Visibility(
                      visible: _event?.childEvents.isNotEmpty == true,
                      child: Padding(padding: const EdgeInsets.symmetric(vertical: 12), child: SingleChildScrollView(child: ScheduleTimeline(events: _childDots, onEventPressed: _eventPressed, nodePosition: 0.3)))),
                  Visibility(
                      visible:
                          DataService.isEditor() && _event?.maxParticipants != null,
                      child: ExpansionTile(
                        title:  Row(children: [IconButton(onPressed: () async
                        {
                          await Clipboard.setData(ClipboardData(text: _participants.map((e) => e.shortNameToString()).join("\n")));
                          ToastHelper.Show("Participants have been copied.".tr());
                        }, icon: const Icon(Icons.copy)), Text("${"Participants".tr()}:")]),
                        children: [ListView.builder(
                            shrinkWrap: true,
                            padding: const EdgeInsets.all(8),
                            physics: const NeverScrollableScrollPhysics(),
                            itemCount: _participants.length,
                            itemBuilder: (BuildContext context, int index) {
                              return Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Row(
                                  children: [
                                    IconButton(
                                        onPressed: () => signOutOther(_participants[index]),
                                        icon: const Icon(Icons.remove_circle_outline)),
                                    Text("${_participants[index]}"),
                                  ],
                                ),
                              );
                            })],
                      ),
                  ),
                  Visibility(
                  visible: _groupInfoModel != null,
                  child: ExpansionTile(
                    title: Text(_groupInfoModel?.title ?? ""),
                    children: [Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Padding(
                            padding: EdgeInsets.all(8.0),
                            ),
                        Visibility(
                          visible: _groupInfoModel?.leader != null,
                          child: Padding(
                              padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 16),
                              child: Text("${"Moderator".tr()}: ${_groupInfoModel?.leader?.name??""}", style: normalTextStyle)),
                        ),
                        Padding(
                            padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 16),
                            child: Text("${"Participants".tr()}:", style: normalTextStyle)),
                        ListView.builder(
                          shrinkWrap: true,
                          padding: const EdgeInsets.all(8),
                          physics: const NeverScrollableScrollPhysics(),
                          itemCount: _groupInfoModel?.participants!.length??0,
                          itemBuilder: (BuildContext context, int index) {
                            return Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 4.0),
                              child: Text("${_groupInfoModel?.participants!.toList()[index].name}", style: normalTextStyle),
                            );
                          })
                      ],
                    )],
                  ),
                )
                ],
              ),
          ),
        ),
      ),
    );
  }

  Future<void> addToMySchedule() async {
    await DataService.addToMySchedule(_event!.id!);
    setState(() {
      _event!.isEventInMySchedule = true;
    });
  }

  Future<void> removeFromMySchedule() async {
    await DataService.removeFromMySchedule(_event!.id!);
    setState(() {
      _event!.isEventInMySchedule = false;
    });
  }

  bool showLoginLogoutButton() {
    return DataService.isLoggedIn() &&
        !isLoadingParticipants &&
        EventModel.canSignIn(_event);
  }

  Future<void> loadData(int id) async {
    loadOfflineData(widget.id!);

    await loadEvent(id);
    OfflineDataHelper.saveEventDescription(_event!);
    await loadParticipants(id);
  }

  void loadOfflineData(int id) {
    var allEvents = OfflineDataHelper.getAllEvents();
    var event = allEvents.firstWhereOrNull((element) => element.id == id);
    if(event!=null) {
      if (event.isGroupEvent && DataService.isLoggedIn()) {
        var userInfo = OfflineDataHelper.getUserInfo();
        if(userInfo?.userGroup!=null) {
          event.title = userInfo!.userGroup!.title;
          event.isMyGroupEvent = true;
          event.description = userInfo.userGroup!.description;
          event.place = userInfo.userGroup!.place;
          _groupInfoModel = userInfo.userGroup;
        }
      }
      else {
        var descr = OfflineDataHelper.getEventDescription(id.toString());
        event.description = descr?.description;

        if(event.place?.id!=null) {
          var place = OfflineDataHelper.getAllPlaces().firstWhereOrNull((element) => element.id == event.place!.id);
          event.place = place;
        }
        else {
          event.place = null;
        }
        event.isEventInMySchedule = OfflineDataHelper.isEventSaved(id);
      }

      var childEvents = allEvents.where((e)=> event.childEventIds?.contains(e.id)??false)
          .sortedBy((element) => element.title??"")
          .sortedBy((element) => element.startTime);
      event.childEvents = childEvents;
      _childDots.clear();
      _childDots.addAll(event.childEvents.map((e) => TimeLineItem.fromEventModelAsChild(e)));

      setState(() {
        _event = event;
      });
    }
  }

  Future<void> loadParticipants(int id) async {
    if (!DataService.isLoggedIn()) {
      return;
    }
    _participants = await DataService.getParticipantsPerEvent(id);
    isLoadingParticipants = false;
    setState(() => {});
  }

  Future<void> loadEvent(int eventId) async {
    var event = await DataService.getEvent(eventId);

    if(event.isGroupEvent && event.isMyGroupEvent)
    {
      var group = await DataService.getUserGroupInfo(DataService.currentUserGroup()!.id!);
      if(group == null)
      {
        context.pop();
        return;
      }
      event.description = group.description;
      event.title = group.title;
      event.place = group.place;
      _groupInfoModel = group;
      _event = event;
      setState(() {});
      return;
    }

    var currentParticipants =
        await DataService.getParticipantsPerEventCount(eventId);
    event.currentParticipants = currentParticipants;
    _event = event;
    _childDots.clear();
    _childDots.addAll(_event!.childEvents.map((e) => TimeLineItem.fromEventModelAsChild(e)));
    setState(() {});
  }

  _eventPressed(int id) {
    RouterService.navigate(context, "${EventPage.ROUTE}/$id").then((value) => loadData(_event!.id!));
  }

  Future<void> signIn([UserInfoModel? participant]) async {
    await DataService.signInToEvent(_event!.id!, participant);
    await loadData(_event!.id!);
  }

  Future<void> signOut() async {
    await DataService.signOutFromEvent(_event!);
    await loadData(_event!.id!);
  }

  Future<String?> signOutOther(UserInfoModel participant) {
    return showDialog<String>(
      context: context,
      builder: (BuildContext context) => AlertDialog(
        title: const Text("Sign out participant"),
        content: const Text("Do you want to sign out participant {participant} from {event}?")
            .tr(namedArgs: {
            "participant":participant.toString(),
            "event":_event!.toString()}),
      actions: <Widget>[
        TextButton(
        onPressed: () => context.pop(),
        child: const Text("Storno").tr(),
        ),
        TextButton(
        onPressed: () async {
          context.pop();
          await DataService.signOutFromEvent(_event!, participant);
          await loadData(_event!.id!);
        },
        child: const Text("Sign out someone").tr(),
        ),
      ],
    )
    );
  }
}
