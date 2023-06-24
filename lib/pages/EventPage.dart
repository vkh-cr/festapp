import 'package:av_app/services/DataService.dart';
import 'package:flutter/material.dart';
import 'package:search_page/search_page.dart';

import '../models/EventModel.dart';
import '../models/ParticipantModel.dart';

class EventPage extends StatefulWidget {
  final int eventId;
  const EventPage({Key? key, required this.eventId}) : super(key: key);

  @override
  _EventPageState createState() => _EventPageState(eventId);
}

class _EventPageState extends State<EventPage> {
  EventModel _event = EventModel(0);
  List<ParticipantModel> _participants = [];
  List<ParticipantModel> _queriedParticipants = [];
  int eventId;
  bool isLoadingParticipants = true;

  _EventPageState(this.eventId);

  @override
  void initState() {
    super.initState();
    loadData();
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
                            )).then((x) => loadData());
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
              visible: !DataService.isLoggedIn(),
              child: const Padding(
                padding: EdgeInsets.all(8.0),
                child: Text(
                    "Na tuto událost je nutné se přihlásit. Se svým e-mailem se přihlašte do aplikace, případně využijte možnosti přihlásit se na recepci."),
              )),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(_event.description ?? ""),
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

  Future<void> loadData() async {
    await loadEvent().whenComplete(loadParticipants);
  }

  Future<void> loadParticipants() async {
    if (!DataService.isLoggedIn()) {
      return;
    }
    var participants = await DataService.getParticipantsPerEvent(eventId);
    _participants = List.from(participants.map((par) => ParticipantModel(
        par["email"],
        par["migrated_users"]["name"],
        par["migrated_users"]["surname"])));
    isLoadingParticipants = false;
    setState(() => {});
  }

  Future<void> loadEvent() async {
    var event = await DataService.getEvent(eventId);
    var currentParticipants =
        await DataService.getParticipantsPerEventCount(eventId);
    setState(() {
      _event = EventModel.fromJson(eventId, event);
      _event.currentParticipants = currentParticipants;
    });
  }

  Future<void> signIn([ParticipantModel? participant]) async {
    await DataService.signInToEvent(eventId, participant?.email);
    await loadData();
  }

  Future<void> signOut() async {
    await DataService.signOutFromEvent(eventId);
    await loadData();
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
              await DataService.signOutFromEvent(eventId, participant.email);
              await loadData();
            },
            child: const Text('Odhlásit'),
          ),
        ],
      ),
    );
  }
}
