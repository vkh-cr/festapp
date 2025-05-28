import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/timeline/schedule_timeline.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_models/user_group_info_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/db_companions.dart';
import 'package:fstapp/data_services/data_extensions.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/data_services/db_groups.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_models/companion_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/dialogs/add_new_event_dialog.dart';
import 'package:fstapp/pages/occasion/event_edit_page.dart';
import 'package:fstapp/pages/utility/html_editor_page.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/services/web_styles_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/dialogs/companion_dialog.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:fstapp/widgets/navigate_back_button.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/widgets/zoomable_image/zoomable_image.dart';
import 'map_page.dart';

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
    final bool isEventCancelled = _event?.isCancelled ?? false;

    return Scaffold(
      appBar: AppBar(
          backgroundColor: _event == null
              ? ThemeConfig.seed1
              : ThemeConfig.eventTypeToColor(context, _event?.type),
          title: Text(
            _event == null ? "Event".tr() : _event.toString(),
            style: TextStyle(fontWeight: FontWeight.bold, color: ThemeConfig.eventTypeToColorNegative(context, _event?.type)),
          ),
          leading: ScheduleBackButton(color: ThemeConfig.eventTypeToColorNegative(context, _event?.type),),
          actions:[
            Visibility(
              visible: showLoginLogoutButton() && RightsService.isApprover() && FeatureService.isFeatureEnabled(FeatureConstants.entryCode),
              child: Padding(
                padding: const EdgeInsets.all(6),
                child: IconButton(
                    onPressed: () async {
                      RouterService.navigatePageInfo(
                          context,
                          CheckRoute(id: _event!.id!));
                    },
                    icon: Icon(
                      Icons.qr_code_scanner,
                      color: ThemeConfig.eventTypeToColorNegative(context, _event?.type),
                    )),
              ),
            ),
            if(FeatureService.isFeatureEnabled(FeatureConstants.mySchedule) && (!isEventCancelled || (_event?.isEventInMySchedule ?? false)))
              ...ButtonsHelper.getAddToMyProgramButton(
                  _event?.canSaveEventToMyProgram() ?? false,
                  addToMySchedule,
                  removeFromMySchedule,
                  ThemeConfig.eventTypeToColorNegative(context, _event?.type),
                  ThemeConfig.eventTypeToColorNegative(context, _event?.type))]),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: PinchScrollView(
            builder: (onPinchStart, onPinchEnd) => Column(
              children: [
                if (isEventCancelled) // Using local variable for clarity
                  Padding(
                    padding: const EdgeInsets.fromLTRB(8.0, 8.0, 8.0, 0),
                    child: Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                      decoration: BoxDecoration(
                        color: ThemeConfig.grey700(context),
                        borderRadius: BorderRadius.circular(StylesConfig.commonRoundness),
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.cancel_outlined, color: ThemeConfig.whiteColor(context), size: 22),
                          const SizedBox(width: 10),
                          Text(
                            "Cancelled".tr().toUpperCase(),
                            style: TextStyle(
                              color: ThemeConfig.whiteColor(context),
                              fontWeight: FontWeight.bold,
                              fontSize: 16,
                              letterSpacing: 0.5,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
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
                                          !isEventCancelled && // Modified
                                          !(_event?.isSignedIn??false) &&
                                          !EventModel.isEventFull(_event),
                                      child: ElevatedButton(
                                          onPressed: () => signIn(context), // signIn itself might also check, but button hidden
                                          child: const Text("Sign in").tr())),
                                  Visibility(
                                      visible: showLoginLogoutButton() &&
                                          (_event?.isSignedIn??false), // Sign out always possible if signed in
                                      child: ElevatedButton(
                                          onPressed: () => signOut(),
                                          child: const Text("Sign out").tr())),
                                  Visibility(
                                      visible: showLoginLogoutButton() &&
                                          FeatureService.isFeatureEnabled(FeatureConstants.companions),
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
                                      (_event!.isGroupEvent ?? false))
                                    ElevatedButton(
                                        onPressed: () =>
                                            RouterService.navigatePageInfo(
                                                context,
                                                HtmlEditorRoute(
                                                    content: {HtmlEditorPage.parContent:
                                                    _event!.description},
                                                    occasionId: RightsService.currentOccasionId()))
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
                            onPressed: () {
                              RouterService.navigateOccasion(
                                  context,
                                  "${MapPage.ROUTE}/${_event!.place!.id}")
                                  .then((value) => loadData(_event!.id!));
                            },
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
                  visible: EventModel.isEventSupportingSignIn(_event) && !AuthService.isLoggedIn() && !isEventCancelled, // Hide if cancelled
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
                      twoFingersOn: onPinchStart,
                      twoFingersOff: onPinchEnd,
                    ),
                  ),
                ),
                Visibility(
                    visible: EventModel.isEventFull(_event) &&
                        AuthService.isLoggedIn() && !isEventCancelled,
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
                    child: HtmlView(
                      html: _event?.description ?? "",
                      isSelectable: true,
                      twoFingersOn: onPinchStart,
                      twoFingersOff: onPinchEnd,
                    ),
                  ),
                ),
                if(_event?.isGroupEvent == false && (_event?.childEvents.isNotEmpty == true || RightsService.isEditor()))
                  Padding(
                      padding: const EdgeInsets.symmetric(vertical: 12),
                      child: ScheduleTimeline(
                          eventGroups: TimeBlockHelper.splitTimeBlocksByDay(_childDots, context),
                          onEventPressed: _eventPressed,
                          showAddNewEventButton: RightsService.isEditor,
                          onAddNewEvent: (context, p, parent) =>
                              AddNewEventDialog.showAddEventDialog(context, p, TimeBlockItem.fromEventModelAsChild(_event!))
                                  .then((_) => loadData(_event!.id!)),
                          parentEvent: TimeBlockItem.fromEventModelAsChild(_event!),
                          nodePosition: 0.3)),
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
    if (mounted) {
      setState(() {
        _event!.isEventInMySchedule = true;
      });
    }
  }

  Future<void> removeFromMySchedule() async {
    await DbEvents.removeFromMySchedule(context, _event!.id!);
    if (mounted) {
      setState(() {
        _event!.isEventInMySchedule = false;
      });
    }
  }

  bool showLoginLogoutButton() {
    return AuthService.isLoggedIn() &&
        !isLoadingEvent &&
        EventModel.isEventSupportingSignIn(_event);
  }

  Future<void> loadData(int id) async {
    await loadOfflineData(widget.id!);

    await loadEvent(id);
    if(mounted) { // isLoadingEvent should be set after loadEvent completes
      setState(() {
        isLoadingEvent = false;
      });
    }


    if (RightsService.isEditor()) {
      await loadParticipants(id);
    }
  }

  Future<void> loadOfflineData(int id) async {
    var allEvents = await OfflineDataService.getAllEvents();
    var event = allEvents.firstWhereOrNull((element) => element.id == id);
    if (event != null) {
      if ((event.isGroupEvent ?? false) && AuthService.isLoggedIn()) {
        var userInfo = await OfflineDataService.getUserInfo();
        if (userInfo?.eventUserGroup != null) {
          event.title = userInfo!.eventUserGroup!.title;
          event.isMyGroupEvent = true;
          event.description = userInfo.eventUserGroup!.description;
          event.place = userInfo.eventUserGroup!.place;
          _groupInfoModel = userInfo.eventUserGroup;
        }
      } else {
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

      if(mounted) {
        setState(() {
          _event = event;
        });
      }
    }
  }

  Future<void> loadParticipants(int id) async {
    _participants = await DbEvents.getParticipantsPerEvent(id);
    if(mounted) setState(() => {});
  }

  Future<void> loadEvent(int eventId) async {
    var event = await DbEvents.getEvent(eventId);

    if ((event.isGroupEvent ?? false) && (event.isMyGroupEvent ?? false)) {
      var group = await DbGroups.getUserGroupInfo(
          AuthService.currentUserGroup()!.id!);
      if (group == null) {
        if (mounted) RouterService.goBack(context);
        return;
      }
      event.description = group.description;
      event.title = group.title;
      event.place = group.place;
      _groupInfoModel = group;
      _event = event;
      if(mounted) setState(() {});
      return;
    }

    var currentParticipants =
    await DbEvents.getParticipantsPerEventCount(eventId);
    event.currentParticipants = currentParticipants;
    _event = event;
    _childDots.clear();
    _childDots.addAll(
        _event!.childEvents.map((e) => TimeBlockItem.fromEventModelAsChild(e)));
    if(mounted) setState(() {});
  }

  _eventPressed(int id) {
    RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id")
        .then((value) => loadData(_event!.id!));
  }

  Future<void> signIn(BuildContext context, [UserInfoModel? participant]) async {
    await DbEvents.signInToEvent(context, _event!.id!, participant);
    await loadData(_event!.id!);
  }

  Future<void> signOut() async { // Allowed for cancelled events if already signed in
    await DbEvents.signOutFromEvent(context, _event!.id!);
    await loadData(_event!.id!);
  }

  Future<void> signInCompanion() async {
    _companions = await DbCompanions.getAllCompanions();
    if (!mounted) return;
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return CompanionDialog(
          eventId: _event!.id!,
          isEventCancelled: _event?.isCancelled ?? false, // Pass cancellation status
          maxCompanions: FeatureService.getMaxCompanions()??0,
          companions: _companions,
          refreshData: () async {
            await loadData(widget.id!);
          },
        );
      },
    );
  }

  Future<String?> signOutOther(UserInfoModel participant) { // Allowed for cancelled events
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