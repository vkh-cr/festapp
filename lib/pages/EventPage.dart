import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbCompanions.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbGroups.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/CompanionModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/featureService.dart';
import 'package:fstapp/pages/EventEditPage.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';
import 'package:fstapp/services/StylesHelper.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/AddNewEventDialog.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/CompanionDialog.dart';
import 'package:fstapp/widgets/NavigateBackButton.dart';

import '../services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import '../widgets/HtmlView.dart';
import '../components/timeline/ScheduleTimeline.dart';
import 'MapPage.dart';

@RoutePage()
class EventPage extends StatefulWidget {
  static const ROUTE = "event";
  int? id;

  EventPage({@pathParam this.id, super.key});

  @override
  _EventPageState createState() => _EventPageState();
}

class _EventPageState extends State<EventPage> {
  final List<TimeBlockItem> _childDots = [];
  EventModel? _event;
  UserGroupInfoModel? _groupInfoModel;

  List<UserInfoModel> _participants = [];
  List<UserInfoModel> _queriedParticipants = [];
  List<CompanionModel> _companions = [];

  bool isLoadingEvent = true;

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
          backgroundColor: _event == null
              ? ThemeConfig.seed1
              : ThemeConfig.eventTypeToColor(context, _event!.type),
          title: Text(
            _event == null ? "Event".tr() : _event.toString(),
            style: const TextStyle(fontWeight: FontWeight.bold),
          ),
          leading: ScheduleBackButton(),
          actions:[
            Visibility(
              visible: showLoginLogoutButton() && RightsService.isApprover() && FeatureService.isFeatureEnabled(FeatureService.entryCode),
              child: Padding(
                padding: const EdgeInsets.all(6),
                child: IconButton(
                    onPressed: () async {
                      RouterService.navigatePageInfo(
                          context,
                          CheckRoute(id: _event!.id!));
                    },
                    icon: const Icon(
                      Icons.qr_code_scanner,
                    )),
              ),
            ),
            ...ButtonsHelper.getAddToMyProgramButton(
                _event?.canSaveEventToMyProgram(),
                addToMySchedule,
                removeFromMySchedule,
                ThemeConfig.upperNavText(context),
                ThemeConfig.upperNavText(context))]),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: SingleChildScrollView(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: LayoutBuilder(
                    builder: (context, constraints) {
                      return SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: ConstrainedBox(
                          constraints:
                              BoxConstraints(minWidth: constraints.maxWidth),
                          child: IntrinsicWidth(
                            child: Row(
                                mainAxisAlignment: MainAxisAlignment.end,
                                mainAxisSize: MainAxisSize.max,
                                children: [
                                  Visibility(
                                      visible: showLoginLogoutButton() &&
                                          !(_event?.isSignedIn??false) &&
                                          !EventModel.isEventFull(_event),
                                      child: ElevatedButton(
                                          onPressed: () => signIn(),
                                          child: const Text("Sign in").tr())),
                                  Visibility(
                                      visible: showLoginLogoutButton() &&
                                          (_event?.isSignedIn??false),
                                      child: ElevatedButton(
                                          onPressed: () => signOut(),
                                          child: const Text("Sign out").tr())),
                                  Visibility(
                                      visible: showLoginLogoutButton() &&
                                          FeatureService.isFeatureEnabled(FeatureService.companions),
                                      child: Padding(
                                        padding: const EdgeInsets.fromLTRB(
                                            8, 0, 0, 0),
                                        child: ElevatedButton(
                                            onPressed: () => signInCompanion(),
                                            child:
                                                const Text("Sign in companion")
                                                    .tr()),
                                      )),
                                  Visibility(
                                    visible: showLoginLogoutButton() &&
                                        (RightsService.isEditor()),
                                    child: Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: ElevatedButton(
                                          onPressed: () async {
                                            _queriedParticipants =
                                                await DbUsers
                                                    .getAllUsersBasics();
                                            _queriedParticipants
                                                .forEach((q) => {
                                                      if (_participants.any(
                                                          (p) => p.id == q.id))
                                                        {q.isSignedIn = true}
                                                    });

                                            // ignore: use_build_context_synchronously
                                            DialogHelper.chooseUser(context,
                                                (person) async {
                                              await signIn(person);
                                              await loadData(_event!.id!);
                                            }, _queriedParticipants,
                                                "Sign in someone".tr());
                                          },
                                          child:
                                              const Text("Sign in other").tr()),
                                    ),
                                  ),
                                  if (AuthService.isGroupLeader() &&
                                      _event != null &&
                                      _event!.isGroupEvent)
                                    ElevatedButton(
                                        onPressed: () =>
                                        RouterService.navigatePageInfo(
                                                context,
                                                HtmlEditorRoute(content: {HtmlEditorPage.parContent:
                                                _event!.description}))
                                            .then((value) async {
                                          if (value != null) {
                                            var changed = value as String;
                                            if (_groupInfoModel != null) {
                                              _groupInfoModel!
                                                  .description = changed;
                                              await DbGroups
                                                  .updateUserGroupInfo(
                                                      _groupInfoModel!);
                                            }
                                            await loadData(_event!.id!);
                                            ToastHelper.Show(context,
                                                "Content has been changed."
                                                    .tr());
                                          }
                                        }),
                                        child:
                                        const Text("Edit content").tr()),
                                  if(RightsService.isEditor())
                                  ElevatedButton(
                                      onPressed: () => RouterService.navigateOccasion(
                                          context,
                                          "${EventEditPage.ROUTE}/${_event!.id}")
                                          .then((value) => loadData(_event!.id!)),
                                      child:
                                          const Text("Edit").tr())
                                ]),
                          ),
                        ),
                      );
                    },
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    alignment: Alignment.topRight,
                    child: Text(_event?.durationString(context) ?? "",
                        style: StylesConfig.normalTextStyle),
                  ),
                ),
                Visibility(
                    visible: _event?.place != null,
                    child: Container(
                        padding: const EdgeInsets.all(8.0),
                        alignment: Alignment.topRight,
                        child: TextButton(
                            onPressed: () => RouterService.navigateOccasion(
                                    context,
                                    "${MapPage.ROUTE}/${_event!.place!.id}")
                                .then((value) => loadData(_event!.id!)),
                            child: IntrinsicWidth(
                              child: Row(
                                children: [
                                  const Icon(Icons.place),
                                  SizedBox.fromSize(size: const Size(4.0, 4.0)),
                                  Text(
                                    "${"Place".tr()}: ${_event?.place?.title ?? ""}",
                                  )
                                ],
                              ),
                            )))),
                Visibility(
                  visible: EventModel.isEventSupportingSignIn(_event) && !AuthService.isLoggedIn(),
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: HtmlView(
                      html: '''
                      <div style="color: ${ThemeConfig.redColor(context).toHexString()}; text-align: center;">
                        <div>${"An account is required to join this event.".tr()}</div>
                        <a href="${AppConfig.webLink}/#/login" style="color: ${ThemeConfig.redColor(context).toHexString()};">
                          ${"Click here to sign in.".tr()}
                        </a>
                      </div>
                    ''',
                      isSelectable: true,
                      fontSize: 16,
                    ),
                  ),
                ),
                Visibility(
                    visible: EventModel.isEventFull(_event) &&
                        AuthService.isLoggedIn(),
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: const Text(
                        "This event is fully booked.",
                      ).tr(),
                    )),
                Visibility(
                  visible: _event != null && _event?.description != null,
                  child: Padding(
                    padding: const EdgeInsets.all(12.0),
                    child: HtmlView(html: _event?.description ?? "", isSelectable: true,),
                  ),
                ),
                if(_event?.isGroupEvent == false && (_event?.childEvents.isNotEmpty == true || RightsService.isEditor()))
                Padding(
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    child: SingleChildScrollView(
                        child: ScheduleTimeline(
                            eventGroups: TimeBlockHelper.splitTimeBlocksByDay(_childDots, context),
                            onEventPressed: _eventPressed,
                            showAddNewEventButton: RightsService.isEditor,
                            onAddNewEvent: (context, p, parent) =>
                                AddNewEventDialog.showAddEventDialog(context, p, TimeBlockItem.fromEventModelAsChild(_event!))
                                    .then((_) => loadData(_event!.id!)),
                            parentEvent: TimeBlockItem.fromEventModelAsChild(_event!),
                            nodePosition: 0.3))),
                Visibility(
                  visible: RightsService.isEditor() &&
                      _event?.maxParticipants != null,
                  child: ExpansionTile(
                    title: Row(children: [
                      IconButton(
                          onPressed: () async {
                            await Clipboard.setData(ClipboardData(
                                text: _participants
                                    .map((e) => e.toFullNameString())
                                    .join("\n")));
                            ToastHelper.Show(context,
                                "Participants have been copied.".tr());
                          },
                          icon: const Icon(Icons.copy)),
                      Text("${"Participants".tr()}:")
                    ]),
                    children: [
                      ListView.builder(
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
                                      onPressed: () =>
                                          signOutOther(_participants[index]),
                                      icon: const Icon(
                                          Icons.remove_circle_outline)),
                                  Text("${_participants[index]}"),
                                ],
                              ),
                            );
                          })
                    ],
                  ),
                ),
                Visibility(
                  visible: _groupInfoModel != null,
                  child: ExpansionTile(
                    title: Text(_groupInfoModel?.title ?? ""),
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Padding(
                            padding: EdgeInsets.all(8.0),
                          ),
                          Visibility(
                            visible: _groupInfoModel?.leader != null,
                            child: Padding(
                                padding: const EdgeInsets.symmetric(
                                    vertical: 8.0, horizontal: 16),
                                child: Text(
                                    "${"Moderator".tr()}: ${_groupInfoModel?.leader?.name ?? ""}",
                                    style: StylesConfig.normalTextStyle)),
                          ),
                          Padding(
                              padding: const EdgeInsets.symmetric(
                                  vertical: 8.0, horizontal: 16),
                              child: Text("${"Participants".tr()}:",
                                  style: StylesConfig.normalTextStyle)),
                          ListView.builder(
                              shrinkWrap: true,
                              padding: const EdgeInsets.all(8),
                              physics: const NeverScrollableScrollPhysics(),
                              itemCount:
                                  _groupInfoModel?.participants!.length ?? 0,
                              itemBuilder: (BuildContext context, int index) {
                                return Padding(
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 16.0, vertical: 4.0),
                                  child: Text(
                                      "${_groupInfoModel?.participants!.toList()[index].name}",
                                      style: StylesConfig.normalTextStyle),
                                );
                              })
                        ],
                      )
                    ],
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
    if (!await DbEvents.addToMySchedule(context, _event!.id!)) {
      return;
    }
    setState(() {
      _event!.isEventInMySchedule = true;
    });
  }

  Future<void> removeFromMySchedule() async {
    await DbEvents.removeFromMySchedule(context, _event!.id!);
    setState(() {
      _event!.isEventInMySchedule = false;
    });
  }

  bool showLoginLogoutButton() {
    return AuthService.isLoggedIn() &&
        !isLoadingEvent &&
        EventModel.isEventSupportingSignIn(_event);
  }

  Future<void> loadData(int id) async {
    await loadOfflineData(widget.id!);

    await loadEvent(id);
    isLoadingEvent = false;
    await OfflineDataService.saveEventDescription(_event!);
    if (RightsService.isEditor()) {
      await loadParticipants(id);
    }
  }

  Future<void> loadOfflineData(int id) async {
    var allEvents = await OfflineDataService.getAllEvents();
    var event = allEvents.firstWhereOrNull((element) => element.id == id);
    if (event != null) {
      if (event.isGroupEvent && AuthService.isLoggedIn()) {
        var userInfo = await OfflineDataService.getUserInfo();
        if (userInfo?.eventUserGroup != null) {
          event.title = userInfo!.eventUserGroup!.title;
          event.isMyGroupEvent = true;
          event.description = userInfo.eventUserGroup!.description;
          event.place = userInfo.eventUserGroup!.place;
          _groupInfoModel = userInfo.eventUserGroup;
        }
      } else {
        var descr = await OfflineDataService.getEventDescription(id.toString());
        event.description = descr?.description;

        if (event.place?.id != null) {
          var place = (await OfflineDataService.getAllPlaces())
              .firstWhereOrNull((element) => element.id == event.place!.id);
          event.place = place;
        } else {
          event.place = null;
        }
        event.isEventInMySchedule = await OfflineDataService.isEventSaved(id);
      }

      var childEvents = allEvents
          .where((e) => event.childEventIds?.contains(e.id) ?? false)
          .toList()
          .sortEvents();
      event.childEvents = childEvents;
      _childDots.clear();
      _childDots.addAll(
          event.childEvents.map((e) => TimeBlockItem.fromEventModelAsChild(e)));

      setState(() {
        _event = event;
      });
    }
  }

  Future<void> loadParticipants(int id) async {
    _participants = await DbEvents.getParticipantsPerEvent(id);
    setState(() => {});
  }

  Future<void> loadEvent(int eventId) async {
    var event = await DbEvents.getEvent(eventId);

    if (event.isGroupEvent && event.isMyGroupEvent) {
      var group = await DbGroups.getUserGroupInfo(
          AuthService.currentUserGroup()!.id!);
      if (group == null) {
        RouterService.goBack(context);
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
        await DbEvents.getParticipantsPerEventCount(eventId);
    event.currentParticipants = currentParticipants;
    _event = event;
    _childDots.clear();
    _childDots.addAll(
        _event!.childEvents.map((e) => TimeBlockItem.fromEventModelAsChild(e)));
    setState(() {});
  }

  _eventPressed(int id) {
    RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id")
        .then((value) => loadData(_event!.id!));
  }

  Future<void> signIn([UserInfoModel? participant]) async {
    await DbEvents.signInToEvent(context, _event!.id!, participant);
    await loadData(_event!.id!);
  }

  Future<void> signOut() async {
    await DbEvents.signOutFromEvent(context, _event!.id!);
    await loadData(_event!.id!);
  }

  Future<void> signInCompanion() async {
    _companions = await DbCompanions.getAllCompanions();
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return CompanionDialog(
          eventId: _event!.id!,
          maxCompanions: FeatureService.getMaxCompanions()??0,
          companions: _companions,
          refreshData: () async {
            await loadData(widget.id!);
          },
        );
      },
    );
  }

  Future<String?> signOutOther(UserInfoModel participant) {
    return showDialog<String>(
        context: context,
        builder: (BuildContext context) => AlertDialog(
              title: const Text("Sign out participant").tr(),
              content: const Text(
                      "Do you want to sign out participant {participant} from {event}?")
                  .tr(namedArgs: {
                "participant": participant.toString(),
                "event": _event!.toString()
              }),
              actions: <Widget>[
                TextButton(
                  onPressed: () => RouterService.goBack(context),
                  child: const Text("Storno").tr(),
                ),
                TextButton(
                  onPressed: () async {
                    RouterService.goBack(context);
                    await DbEvents.signOutFromEvent(
                        context, _event!.id!, participant);
                    await loadData(_event!.id!);
                  },
                  child: const Text("Sign out someone").tr(),
                ),
              ],
            ));
  }
}
