import 'package:av_app/pages/HtmlEditorPage.dart';
import 'package:av_app/services/DataService.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:search_page/search_page.dart';

import '../models/EventModel.dart';
import '../models/ParticipantModel.dart';
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

  List<ParticipantModel> _participants = [];
  List<ParticipantModel> _queriedParticipants = [];
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
        title: Text(_event==null?"událost":_event.toString()),
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
                                (p) => DataService.currentUserEmail() == p.email),
                        child: ElevatedButton(
                            onPressed: () => signIn(),
                            child: const Text("Přihlásit se"))),
                    Visibility(
                        visible: showLoginLogoutButton() &&
                            _participants.any(
                                (p) => DataService.currentUserEmail() == p.email),
                        child: ElevatedButton(
                            onPressed: () => signOut(),
                            child: const Text("Odhlásit se"))),
                    Visibility(
                      visible: showLoginLogoutButton() && (DataService.isAdmin() || DataService.isReceptionAdmin()),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: ElevatedButton(
                            onPressed: () async {
                              _queriedParticipants = await DataService.getAllParticipants();
                              _queriedParticipants.forEach((q) => {
                                    if (_participants.any((p) => p.email == q.email))
                                      {q.isSignedIn = true}
                                  });

                                // ignore: use_build_context_synchronously
                                showSearch(
                                    context: context,
                                    delegate: SearchPage<ParticipantModel>(
                                      showItemsOnEmpty: true,
                                      items: _queriedParticipants,
                                      searchLabel: 'Hledat účastníky',
                                      suggestion: const Center(
                                        child: Text(
                                            "Najdi účastníka podle jména, příjmení nebo e-mailu."),
                                      ),
                                      failure: const Center(
                                        child: Text("Nikdo nebyl nalezen."),
                                      ),
                                      filter: (person) => [
                                        person.name,
                                        person.surname,
                                        person.email,
                                      ],
                                      builder: (person) => ListTile(
                                        title: Text(person.name),
                                        subtitle: Text(person.surname),
                                        trailing: Column(
                                          crossAxisAlignment: CrossAxisAlignment.end,
                                          children: [
                                            Visibility(
                                              visible: person.isSignedIn?true:false,
                                              child: ElevatedButton(
                                                  onPressed: () => signOutOther(person),
                                                  child: const Text("Odhlásit")),
                                            ),
                                            Visibility(
                                              visible: person.isSignedIn?false:true,
                                              child: ElevatedButton(
                                                  onPressed: () => signIn(person),
                                                  child: const Text("Přihlásit")),
                                            ),
                                            Text(person.email),
                                          ],
                                        ),
                                      ),
                                    )).then((x) => loadData(_event!.id!));
                              },
                              child: const Text("Přihlásit druhého")),
                        ),
                      ),
                      Visibility(
                          visible: DataService.isAdmin() || DataService.isGroupLeader(),
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

                                  ToastHelper.Show("Popis změněn!");
                                  Navigator.popAndPushNamed(context, EventPage.ROUTE, arguments: _event!.id);
                                }
                              }),
                              child: const Text("Upravit popis")))
                    ]),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Container(
                      alignment: Alignment.topRight,
                      child: Text(_event?.durationString()??"", style: normalTextStyle),
                    ),
                  ),
                  Visibility(
                      visible: _event?.place != null,
                      child: Container(
                          padding: const EdgeInsets.all(8.0),
                          alignment: Alignment.topRight,
                          child: TextButton(
                              onPressed: () => Navigator.pushNamed(context, MapPage.ROUTE, arguments: _event!.place!.id).then((value) => loadData(_event!.id!)),
                              child: Text("Místo: ${_event?.place?.title??""}", style: normalTextStyle,))
                      )),
                  Visibility(
                      visible: EventModel.canSignIn(_event) && !DataService.isLoggedIn(),
                      child: const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Text(
                          "Na tuto událost je nutné se přihlásit. Se svým e-mailem se přihlašte do aplikace, případně využijte možnosti přihlásit se na recepci.",
                          style: TextStyle(color: attentionColor),),
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
                      child: Padding(padding: const EdgeInsets.symmetric(vertical: 12), child: ProgramTimeline(events: _childDots, onEventPressed: _eventPressed, nodePosition: 0.3))),
                  Visibility(
                      visible:
                          DataService.isAdmin() && _event?.maxParticipants != null,
                      child: ExpansionTile(
                        title:  Row(children: [IconButton(onPressed: () async
                        {
                          await Clipboard.setData(ClipboardData(text: _participants.join("\n")));
                          ToastHelper.Show("Přihlášeni byli zkopírováni do schránky.");
                        }, icon: const Icon(Icons.copy)), const Text("Přihlášeni:")]),
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
                        Padding(
                            padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 16),
                            child: Text("Moderátor: ${_groupInfoModel?.leader!.name}", style: normalTextStyle)),
                        Padding(
                            padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 16),
                            child: Text("Členové skupinky:", style: normalTextStyle)),
                        ListView.builder(
                          shrinkWrap: true,
                          padding: const EdgeInsets.all(8),
                          physics: const NeverScrollableScrollPhysics(),
                          itemCount: _groupInfoModel?.participants.length??0,
                          itemBuilder: (BuildContext context, int index) {
                            return Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 4.0),
                              child: Text("${_groupInfoModel?.participants[index].name}", style: normalTextStyle),
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

  Future<void> signIn([ParticipantModel? participant]) async {
    await DataService.signInToEvent(_event!.id!, participant);
    await loadData(_event!.id!);
  }

  Future<void> signOut() async {
    await DataService.signOutFromEvent(_event!);
    await loadData(_event!.id!);
  }

  Future<String?> signOutOther(ParticipantModel participant) {
    return showDialog<String>(
      context: context,
      builder: (BuildContext context) => AlertDialog(
        title: const Text('Odhlášení účastníka'),
        content: Text("Chcete odhlásit účastníka $participant z $_event?"),
        actions: <Widget>[
          TextButton(
            onPressed: () => Navigator.pop(context, 'Storno'),
            child: const Text('Storno'),
          ),
          TextButton(
            onPressed: () async {
              Navigator.pop(context, 'Odhlásit');
              await DataService.signOutFromEvent(_event!, participant);
              await loadData(_event!.id!);
            },
            child: const Text('Odhlásit'),
          ),
        ],
      ),
    );
  }
}
