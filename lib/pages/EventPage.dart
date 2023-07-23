import 'package:av_app/services/DataService.dart';
import 'package:flutter/material.dart';
import 'package:search_page/search_page.dart';

import '../models/EventModel.dart';
import '../models/ParticipantModel.dart';
import '../styles/Styles.dart';
import '../widgets/HtmlDescriptionWidget.dart';
import 'MapPage.dart';

class EventPage extends StatefulWidget {
  static const ROUTE = "/event";
  const EventPage({Key? key}) : super(key: key);

  @override
  _EventPageState createState() => _EventPageState();
}

class _EventPageState extends State<EventPage> {
  EventModel _event = EventModel(id: 0);
  List<ParticipantModel> _participants = [];
  List<ParticipantModel> _queriedParticipants = [];
  bool isLoadingParticipants = true;

  _EventPageState();

  void didChangeDependencies() {
    super.didChangeDependencies();
    final id = ModalRoute.of(context)?.settings.arguments as int;
    loadData(id);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_event.toString()),
      ),
      body: Column(
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
                visible: showLoginLogoutButton(),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: ElevatedButton(
                      onPressed: () async {
                        _queriedParticipants = await DataService.getAllUsers();
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
                            )).then((x) => loadData(_event.id));
                      },
                      child: const Text("Přihlásit druhého")),
                ),
              ),
            ]),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Container(
              alignment: Alignment.topRight,
              child: Text(_event.durationString()),
            ),
          ),
          Visibility(
              visible: !DataService.isLoggedIn() && _event.canSignIn(),
              child: const Padding(
                padding: EdgeInsets.all(8.0),
                child: Text(
                    "Na tuto událost je nutné se přihlásit. Se svým e-mailem se přihlašte do aplikace, případně využijte možnosti přihlásit se na recepci.",
                style: TextStyle(color: attentionColor),),
              )),
          Visibility(
              visible: _event.place != null,
              child: Container(
                  padding: const EdgeInsets.all(8.0),
                  alignment: Alignment.topRight,
                  child: TextButton(
                      onPressed: () => Navigator.pushNamed(context, MapPage.ROUTE, arguments: _event.place!.placeId).then((value) => loadData(_event.id)),
                      child: Text(_event.place?.title??""))
              )),
          Visibility(
            visible: _event.description != null,
            child: Padding(
              padding: const EdgeInsets.all(12.0),
              child: HtmlDescriptionWidget(html: _event.description??""),
            ),
          ),
          Visibility(
              visible:
                  DataService.isLoggedIn() && _event.maxParticipants != null,
              child: Container(
                  alignment: Alignment.topLeft,
                  padding: const EdgeInsets.all(8.0),
                  child: const Text("Přihlášeni:"))),
          Expanded(
            child: ListView.builder(
                padding: const EdgeInsets.all(8),
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
                }),
          ),
        ],
      ),
    );
  }

  bool showLoginLogoutButton() {
    return DataService.isLoggedIn() &&
        !isLoadingParticipants &&
        _event.canSignIn();
  }

  Future<void> loadData(int id) async {
    await loadEvent(id).whenComplete(loadParticipants);
  }

  Future<void> loadParticipants() async {
    if (!DataService.isLoggedIn()) {
      return;
    }
    var participants = await DataService.getParticipantsPerEvent(_event.id);
    _participants = List.from(participants.map((par) => ParticipantModel(
        par["email"],
        par["migrated_users"]["name"],
        par["migrated_users"]["surname"])));
    isLoadingParticipants = false;
    setState(() => {});
  }

  Future<void> loadEvent(int eventId) async {
    var event = await DataService.getEvent(eventId);
    var currentParticipants =
        await DataService.getParticipantsPerEventCount(eventId);
    _event = event;
    _event.currentParticipants = currentParticipants;
    setState(() {
    });
  }

  Future<void> signIn([ParticipantModel? participant]) async {
    await DataService.signInToEvent(_event.id, participant?.email);
    await loadData(_event.id);
  }

  Future<void> signOut() async {
    await DataService.signOutFromEvent(_event.id);
    await loadData(_event.id);
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
              await DataService.signOutFromEvent(_event.id, participant.email);
              await loadData(_event.id);
            },
            child: const Text('Odhlásit'),
          ),
        ],
      ),
    );
  }
}
