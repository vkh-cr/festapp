import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/pages/HtmlEditorPage.dart';
import 'package:avapp/services/DataService.dart';
import 'package:avapp/services/DialogHelper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:avapp/config.dart';

import '../models/EventModel.dart';
import '../models/UserGroupInfoModel.dart';
import '../services/ToastHelper.dart';
import '../styles/Styles.dart';
import '../widgets/HtmlDescriptionWidget.dart';
import '../widgets/ProgramTimeline.dart';
import 'MapPage.dart';

class EventPage extends StatefulWidget {
  static const ROUTE = "/event";
  const EventPage({Key? key}) : super(key: key);

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
    var args = ModalRoute.of(context)?.settings.arguments;
    var id = 1;
    if(args!=null){
      id = args as int;
    }
    loadData(id);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_event==null?"Event".tr():_event.toString()),
      ),
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
                              onPressed: () => Navigator.pushNamed(context, HtmlEditorPage.ROUTE, arguments: _event!.description).then((value) async {
                                if(value != null)
                                {
                                  var changed = value as String;
                                  if(_groupInfoModel!=null)
                                  {
                                    _groupInfoModel!.description = changed;
                                    await DataService.updateUserGroupInfo(_groupInfoModel!);
                                  }
                                  else{
                                    _event!.description = changed;
                                    await DataService.updateEvent(_event!);
                                  }

                                  ToastHelper.Show("Content has been changed.".tr());
                                  Navigator.popAndPushNamed(context, EventPage.ROUTE, arguments: _event!.id);
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
                              onPressed: () => Navigator.pushNamed(context, MapPage.ROUTE, arguments: _event!.place).then((value) => loadData(_event!.id!)),
                              child: Text("Place".tr() + ": ${_event?.place?.title??""}", style: normalTextStyle,))
                      )),
                  Visibility(
                      visible: EventModel.canSignIn(_event) && !DataService.isLoggedIn(),
                      child: Padding(
                        padding: EdgeInsets.all(8.0),
                        child: const Text(
                          "You need to sign in to this event. First, sign in to the app.",
                          style: TextStyle(color: config.attentionColor),).tr(),
                      )),
                  Visibility(
                    visible: _event != null && _event?.description != null,
                    child: Padding(
                      padding: const EdgeInsets.all(12.0),
                      child: HtmlDescriptionWidget(html: _event?.description ?? ""),
                    ),
                  ),
                  Visibility(
                      visible: _event?.childEvents.isNotEmpty == true,
                      child: Padding(padding: const EdgeInsets.symmetric(vertical: 12), child: SingleChildScrollView(child: ProgramTimeline(events: _childDots, onEventPressed: _eventPressed, nodePosition: 0.3)))),
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
                  visible: DataService.hasGroup() && _groupInfoModel != null,
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
                          itemCount: _groupInfoModel?.participants.length??0,
                          itemBuilder: (BuildContext context, int index) {
                            return Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 4.0),
                              child: Text("${_groupInfoModel?.participants.toList()[index].name}", style: normalTextStyle),
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

  bool showLoginLogoutButton() {
    return DataService.isLoggedIn() &&
        !isLoadingParticipants &&
        EventModel.canSignIn(_event);
  }

  Future<void> loadData(int id) async {
    await loadEvent(id);
    await loadParticipants(id);
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

    if(event.isGroupEvent && DataService.hasGroup())
    {
      var group = await DataService.getUserGroupInfo(DataService.currentUserGroup()!.id!);
      if(group == null)
      {
        Navigator.pop(context);
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
    Navigator.pushNamed(
        context, EventPage.ROUTE, arguments: id).then((value) => loadData(_event!.id!));
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
    onPressed: () => Navigator.pop(context, "Storno".tr()),
    child: const Text("Storno").tr(),
    ),
    TextButton(
    onPressed: () async {
    Navigator.pop(context);
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