import 'package:avapp/dataGrids/DataGridAction.dart';
import 'package:avapp/dataGrids/SingleTableDataGrid.dart';
import 'package:avapp/models/ExclusiveGroupModel.dart';
import 'package:avapp/models/GlobalSettingsModel.dart';
import 'package:avapp/models/PlaceModel.dart';
import 'package:avapp/models/Tb.dart';
import 'package:avapp/models/UserGroupInfoModel.dart';
import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/pages/MapPage.dart';
import 'package:avapp/dataGrids/DataGridHelper.dart';
import 'package:avapp/data/DataService.dart';
import 'package:avapp/services/MailerSendHelper.dart';
import 'package:avapp/services/MapIconService.dart';
import 'package:avapp/services/NavigationHelper.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:avapp/services/UserManagementHelper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

import '../models/EventModel.dart';
import '../services/DialogHelper.dart';
import 'HtmlEditorPage.dart';
import '../models/InformationModel.dart';

class AdministrationPage extends StatefulWidget {
  static const ROUTE = "/admin";
  const AdministrationPage({Key? key}) : super(key: key);

  @override
  _AdministrationPageState createState() => _AdministrationPageState();
}

class _AdministrationPageState extends State<AdministrationPage> with SingleTickerProviderStateMixin {
  List<String> places = [];
  List<PlutoColumn> columns = [];
  List<String> mapIcons = [];

  late TabController _tabController;

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    if(!DataService.isEditor())
    {
      NavigationHelper.goBackOrHome(context);
      return;
    }
    loadData();
  }

  Future<void> loadData() async {
    await loadPlaces();

    mapIcons = MapIconHelper.type2Icon.keys.toList();
    mapIcons.add(PlaceModel.WithouValue);

    setState(() {});
  }

  Future<void> loadPlaces() async {
    var placesRaws =  await DataService.getMapPlaces();
    var placesStrings = placesRaws.map((p)=>p.toPlutoSelectString()).toList();
    placesStrings.add(PlaceModel.WithouValue);
    setState(() {
      places = placesStrings;
    });
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: 6);
  }

  @override
  Widget build(BuildContext context) {

    return  DefaultTabController(
      length: _tabController.length,
      child: Scaffold(
          appBar: AppBar(
          title: const Text("Admin").tr(),
          leading: BackButton(
            onPressed: () => NavigationHelper.goBackOrHome(context),
          ),
          bottom: PreferredSize(
            preferredSize: const Size.fromHeight(40),
            child: Align(
              alignment: Alignment.centerLeft,
              child: TabBar(
                controller: _tabController,
                  isScrollable: true,
                tabs: [
                  Row(
                  children: [
                    const Icon(Icons.info),
                    Padding(padding: const EdgeInsets.all(12), child: const Text("Info").tr())
                    ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.calendar_month),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Events").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.pin_drop),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Places").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.punch_clock_rounded),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Exclusivity").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.groups),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Groups").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.people),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Users").tr())
                      ]
                  ),
                  // Row(
                  //     children: [
                  //       Icon(Icons.settings),
                  //       Padding(padding: EdgeInsets.all(12), child: Text("Nastavení"))
                  //     ]
                  // )
                ]
              ),
            ),
          )),
        body: TabBarView(
          controller: _tabController,
          physics: const NeverScrollableScrollPhysics(),
          children: [
            SingleTableDataGrid<InformationModel>(
                context,
                DataService.getAllInformation,
                InformationModel.fromPlutoJson,
                DataGridFirstColumn.deleteAndDuplicate,
                Tb.information.id,
                columns: [
                  PlutoColumn(
                      title: "Id".tr(),
                      field: Tb.information.id,
                      type: PlutoColumnType.number(defaultValue: -1),
                      readOnly: true,
                      width: 50,
                      renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),),
                  PlutoColumn(
                    title: "Hide".tr(),
                    field: Tb.information.is_hidden,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.information.is_hidden),
                  ),
                  PlutoColumn(
                      title: "Title".tr(),
                      field: Tb.information.title,
                      type: PlutoColumnType.text()),
                  PlutoColumn(
                      width: 150,
                      title: "Content".tr(),
                      field: Tb.information.description,
                      type: PlutoColumnType.text(),
                      renderer: (rendererContext) {
                        return ElevatedButton(
                            onPressed: () async{
                              var oldText = rendererContext.row.cells[Tb.information.description]?.value;
                              context.push(HtmlEditorPage.ROUTE, extra: oldText).then((value) async {
                                if(value != null)
                                {
                                  var newText = value as String;
                                  if(newText!=oldText)
                                  {
                                    var cell = rendererContext.row.cells[Tb.information.description]!;
                                    rendererContext.stateManager.changeCellValue(cell, newText, force: true);
                                  }
                                }
                              });},
                            child: Row(children: [Icon(Icons.edit), Padding(padding: EdgeInsets.all(6), child: Text("Edit".tr())) ])
                        );
                      }),
                  PlutoColumn(
                    title: "Order".tr(),
                    field: Tb.information.order,
                    type: PlutoColumnType.number(defaultValue: null),
                    applyFormatterInEditing: true,
                    width: 100,
                  ),
                  PlutoColumn(
                      title: "Type".tr(),
                      field: Tb.information.type,
                      type: PlutoColumnType.text()),
                ]).DataGrid(),
            SingleTableDataGrid<EventModel>(
                context,
                DataService.getEventsWithPlaces,
                EventModel.fromPlutoJson,
                DataGridFirstColumn.deleteAndDuplicate,
                Tb.events.id,
                columns: [
                  PlutoColumn(
                    title: "Id".tr(),
                    field: Tb.events.id,
                    type: PlutoColumnType.number(defaultValue: -1),
                    readOnly: true,
                    width: 50,
                    renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
                  ),
                  PlutoColumn(
                    title: "Hide".tr(),
                    field: Tb.events.is_hidden,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.events.is_hidden),
                  ),
                  PlutoColumn(
                      title: "Title".tr(),
                      field: EventModel.titleColumn,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                  PlutoColumn(
                    title: "Start date".tr(),
                    field: EventModel.startDateColumn,
                    type: PlutoColumnType.date(defaultValue: DateTime.now()),
                    width: 140,
                  ),
                  PlutoColumn(
                    title: "Start".tr(),
                    field: EventModel.startTimeColumn,
                    type: PlutoColumnType.time(),
                    width: 100,
                  ),
                  PlutoColumn(
                    title: "End date".tr(),
                    field: EventModel.endDateColumn,
                    type: PlutoColumnType.date(defaultValue: DateTime.now()),
                    width: 140,
                  ),
                  PlutoColumn(
                    title: "End".tr(),
                    field: EventModel.endTimeColumn,
                    type: PlutoColumnType.time(),
                    width: 100,
                  ),
                  PlutoColumn(
                    title: "Max".tr(),
                    field: EventModel.maxParticipantsColumn,
                    type: PlutoColumnType.number(negative: false, defaultValue: null),
                    width: 70,
                  ),
                  PlutoColumn(
                    title: "M/F 50/50".tr(),
                    field: EventModel.splitForMenWomenColumn,
                    type: PlutoColumnType.text(),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, EventModel.splitForMenWomenColumn),
                  ),
                  PlutoColumn(
                    title: "Group".tr(),
                    field: EventModel.isGroupEventColumn,
                    type: PlutoColumnType.text(),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, EventModel.isGroupEventColumn),
                  ),
                  PlutoColumn(
                    title: "Place".tr(),
                    field: EventModel.placeColumn,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    formatter: DataGridHelper.GetValueFromFormatted,
                  ),
                  PlutoColumn(
                      width: 150,
                      title: "Content".tr(),
                      enableFilterMenuItem: false,
                      enableContextMenu: false,
                      enableSorting: false,
                      field: Tb.events.description,
                      type: PlutoColumnType.text(defaultValue: ""),
                      renderer: (rendererContext) {
                        return ElevatedButton(
                            onPressed: () async{
                              String? textToEdit;
                              String? oldText = rendererContext.row.cells[Tb.events.description]?.value;
                              if(oldText!=null)
                              {
                                textToEdit = oldText;
                              }
                              if(textToEdit == null)
                              {
                                var eventId = rendererContext.row.cells[Tb.events.id]!.value;

                                if(eventId!=null)
                                {
                                  var fullEvent = await DataService.getEvent(eventId);
                                  textToEdit = fullEvent.description;
                                }
                              }
                              context.push(HtmlEditorPage.ROUTE, extra: textToEdit).then((value) async {
                                if(value != null)
                                {
                                  var newText = value as String;
                                  if(newText!=textToEdit)
                                  {
                                    rendererContext.row.cells[Tb.events.description]?.value = newText;
                                    var cell = rendererContext.row.cells[Tb.events.description]!;
                                    rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
                                  }
                                }
                              });},
                            child: Row(children: [const Icon(Icons.edit), Padding(padding: const EdgeInsets.all(6), child: const Text("Edit").tr()) ])
                        );
                      }),
                  PlutoColumn(
                      title: "Show inside event".tr(),
                      field: EventModel.parentEventColumn,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                ]).DataGrid(),
            SingleTableDataGrid<PlaceModel>(
                context,
                DataService.getAllPlaces,
                PlaceModel.fromPlutoJson,
                DataGridFirstColumn.deleteAndDuplicate,
                Tb.places.id,
                actionsExtended: DataGridExtendedActions(saveAction:
                DataGridAction(
                  action: (datagrid, [action]) async {
                    await action!();
                    await loadPlaces();
                  }
                )),
                columns: [
                  PlutoColumn(
                    title: "Id".tr(),
                    field: Tb.places.id,
                    type: PlutoColumnType.number(defaultValue: -1),
                    readOnly: true,
                    width: 50,
                    renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
                  ),
                  PlutoColumn(
                    title: "Hide".tr(),
                    field: Tb.places.is_hidden,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.places.is_hidden),
                  ),
                  PlutoColumn(
                      title: "Title".tr(),
                      field: Tb.places.title,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                  PlutoColumn(
                      title: "Content".tr(),
                      field: Tb.places.description,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                  PlutoColumn(
                    title: "Icon".tr(),
                    field: Tb.places.type,
                    type: PlutoColumnType.select(mapIcons),
                    renderer: (rendererContext) => DataGridHelper.mapIconRenderer(rendererContext, setState),
                  ),
                  PlutoColumn(
                      width: 150,
                      title: "Location on map".tr(),
                      enableFilterMenuItem: false,
                      enableContextMenu: false,
                      enableSorting: false,
                      field: Tb.places.coordinates,
                      type: PlutoColumnType.text(defaultValue: DataService.globalSettingsModel!.defaultMapLocation),
                      renderer: (rendererContext) {
                        return ElevatedButton(
                            onPressed: () async {
                              var placeModel = PlaceModel.fromPlutoJson(rendererContext.row.toJson());
                              context.push(MapPage.ROUTE, extra: placeModel).then((value) async {
                                  if(value != null)
                                  {
                                    var cell = rendererContext.row.cells[Tb.places.coordinates]!;
                                    rendererContext.stateManager.changeCellValue(cell, value, force: true);
                                  }
                                 });
                              },
                            child: Row(children: [const Icon(Icons.edit), Padding(padding: const EdgeInsets.all(6), child: const Text("Edit").tr()) ])
                        );
                      }),
                ]).DataGrid(),
            SingleTableDataGrid<ExclusiveGroupModel>(
                context,
                DataService.getAllExclusiveGroups,
                ExclusiveGroupModel.fromPlutoJson,
                DataGridFirstColumn.delete,
                ExclusiveGroupModel.idColumn,
                columns: [
                  PlutoColumn(
                    title: "Id".tr(),
                    field: ExclusiveGroupModel.idColumn,
                    type: PlutoColumnType.number(defaultValue: -1),
                    readOnly: true,
                    enableEditingMode: false,
                    width: 50,
                    renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
                  ),
                  PlutoColumn(
                      title: "Name".tr(),
                      field: ExclusiveGroupModel.titleColumn,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                  PlutoColumn(
                      title: "Events".tr(),
                      field: ExclusiveGroupModel.eventsColumn,
                      type: PlutoColumnType.text(),
                      width: 500
                  ),
                ]).DataGrid(),
            SingleTableDataGrid<UserGroupInfoModel>(
                context,
                DataService.getAllUserGroupInfo,
                UserGroupInfoModel.fromPlutoJson,
                DataGridFirstColumn.delete,
                Tb.user_group_info.id,
                columns: [
                  PlutoColumn(
                    title: "Id".tr(),
                    field: Tb.user_group_info.id,
                    type: PlutoColumnType.number(defaultValue: -1),
                    readOnly: true,
                    enableEditingMode: false,
                    width: 50,
                    renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
                  ),
                  PlutoColumn(
                      title: "Name".tr(),
                      field: UserGroupInfoModel.titleColumn,
                      type: PlutoColumnType.text(),
                      width: 200
                  ),
                  PlutoColumn(
                      title: "Moderator".tr(),
                      field: UserGroupInfoModel.leaderUserColumn,
                      type: PlutoColumnType.text(),
                      enableEditingMode: false,
                      width: 200,
                      renderer: (rendererContext) {
                        String? userName;
                        var currentValue = rendererContext.row.cells[UserGroupInfoModel.leaderUserColumn]?.value;
                        if(currentValue!=null && currentValue.toString().isNotEmpty)
                        {
                          var user = (rendererContext.row.cells[UserGroupInfoModel.leaderUserColumn]?.value as UserInfoModel);
                          userName = user.toString();
                        }
                        return Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              IconButton(
                                  onPressed: () async{
                                    if(_allUsers.isEmpty)
                                    {
                                      _allUsers = await DataService.getAllUsersBasics();
                                    }
                                    DialogHelper.chooseUser(context, (person) =>
                                    setState(() {
                                      rendererContext.row.cells[UserGroupInfoModel.leaderUserColumn]?.value = person;
                                      var cell = rendererContext.row.cells[UserGroupInfoModel.leaderUserColumn]!;
                                      rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
                                      context.pop();
                                    }), _allUsers, "Set".tr());
                                  },
                                  icon: const Icon(Icons.add_circle_rounded)),
                              Text(userName??""),]
                        );
                      }
                  ),
                  PlutoColumn(
                      title: "Participants".tr(),
                      field: UserGroupInfoModel.participantsColumn,
                      type: PlutoColumnType.text(defaultValue: <UserInfoModel>{}),
                      enableEditingMode: false,
                      width: 600,
                      renderer: (rendererContext) {
                        String? userNames;
                        Set<UserInfoModel> participants = {};
                        var currentValue = rendererContext.row.cells[UserGroupInfoModel.participantsColumn]?.value;
                        if(currentValue!=null && currentValue.toString().isNotEmpty)
                        {
                          participants = (rendererContext.row.cells[UserGroupInfoModel.participantsColumn]?.value as Set<UserInfoModel>);
                          userNames = participants.join(", ");
                        }
                        return Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [

                              IconButton(
                                  onPressed: () async{
                                    if(_allUsers.isEmpty)
                                    {
                                      _allUsers = await DataService.getAllUsersBasics();
                                    }
                                    DialogHelper.chooseUser(context, (person) =>
                                        setState(() {
                                          rendererContext.row.cells[UserGroupInfoModel.participantsColumn]?.value.add(person);
                                          var cell = rendererContext.row.cells[UserGroupInfoModel.participantsColumn]!;
                                          rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
                                        }), _allUsers, "Add".tr());
                                  },
                                  icon: const Icon(Icons.add_circle_rounded)),
                              IconButton(
                                  onPressed: () async{
                                    var cell = rendererContext.row.cells[UserGroupInfoModel.participantsColumn]!;
                                    rendererContext.stateManager.changeCellValue(cell, <UserInfoModel>{}, force: true);
                                  },
                                  icon: const Icon(Icons.remove_circle)),
                              Text("(${participants.length}) $userNames"),]
                        );
                      }
                  ),
                  PlutoColumn(
                      width: 150,
                      title: "Content".tr(),
                      enableFilterMenuItem: false,
                      enableContextMenu: false,
                      enableSorting: false,
                      field: Tb.user_group_info.description,
                      type: PlutoColumnType.text(defaultValue: null),
                      renderer: (rendererContext) {
                        return ElevatedButton(
                            onPressed: () async{
                              var oldText = rendererContext.row.cells[Tb.user_group_info.description]!.value as String?;
                              context.push(HtmlEditorPage.ROUTE, extra: oldText).then((value) async {
                                if(value != null)
                                {
                                  var newText = value as String;
                                  if(newText!=oldText)
                                  {
                                    var cell = rendererContext.row.cells[Tb.user_group_info.description]!;
                                    rendererContext.stateManager.changeCellValue(cell, newText, force: true);
                                  }
                                }
                              });},
                            child: Row(children: [Icon(Icons.edit), Padding(padding: EdgeInsets.all(6), child: Text("Edit".tr())) ])
                        );
                      }),
                  PlutoColumn(
                      width: 150,
                      title: "Place".tr(),
                      enableFilterMenuItem: false,
                      enableContextMenu: false,
                      enableSorting: false,
                      field: UserGroupInfoModel.placeColumn,
                      type: PlutoColumnType.text(defaultValue: null),
                      renderer: (rendererContext) {
                        return ElevatedButton(
                            onPressed: () async {
                              var title = rendererContext.row.cells[UserGroupInfoModel.titleColumn]?.value;
                              var placeModel = rendererContext.row.cells[UserGroupInfoModel.placeColumn]?.value as PlaceModel?;
                              placeModel ??= PlaceModel(id: null, title: title, description: "", type: "group", isHidden: true, latLng: GlobalSettingsModel.DefaultPosition);

                              context.push(MapPage.ROUTE, extra: placeModel).then((value) async {
                                if(value != null)
                                {
                                  placeModel!.latLng = value;
                                  var cell = rendererContext.row.cells[UserGroupInfoModel.placeColumn]!;
                                  rendererContext.stateManager.changeCellValue(cell, placeModel, force: true);
                                }
                              });
                            },
                            child: Row(children: [const Icon(Icons.location_pin), Padding(padding: const EdgeInsets.all(6), child: const Text("Location").tr()) ])
                        );
                      }),
                ]).DataGrid(),
            SingleTableDataGrid<UserInfoModel>(
                context,
                DataService.getUsers,
                UserInfoModel.fromPlutoJson,
                DataGridFirstColumn.deleteAndCheck,
                UserInfoModel.idColumn,
                actionsExtended: DataGridExtendedActions(areAllActionsEnabled: DataService.isAdmin),
                headerChildren: [
                  DataGridAction(name: "Import".tr(), action: (SingleTableDataGrid p0, [_]) { _import(p0); }, isEnabled: DataService.isAdmin),
                  DataGridAction(name: "Generate password".tr(), action:  (SingleTableDataGrid p0, [_]) { _generatePassword(p0); }, isEnabled: DataService.isAdmin),
                  DataGridAction(name: "Change password".tr(), action: (SingleTableDataGrid p0, [_]) { _setPassword(p0); }, isEnabled: DataService.isAdmin),
                  DataGridAction(name: "Add to group".tr(), action: (SingleTableDataGrid p0, [_]) { _addToGroup(p0); }),
                ],
                columns: [
                  PlutoColumn(
                      title: "Id".tr(),
                      field: UserInfoModel.idColumn,
                      type: PlutoColumnType.text(),
                      readOnly: true,
                      width: 50),
                  PlutoColumn(
                      title: "E-mail".tr(),
                      enableEditingMode: DataService.isAdmin(),
                      field: UserInfoModel.emailReadonlyColumn,
                      type: PlutoColumnType.text(),
                      checkReadOnly: (row, cell) {
                        final id = row.cells[UserInfoModel.idColumn]?.value as String?;
                        return id != null && id.isNotEmpty;
                      },
                      width: 200
                  ),
                  PlutoColumn(
                    title: "Name".tr(),
                    enableEditingMode: DataService.isAdmin(),
                    field: UserInfoModel.nameColumn,
                    type: PlutoColumnType.text(),
                    width: 200,
                  ),
                  PlutoColumn(
                    title: "Surname".tr(),
                    enableEditingMode: DataService.isAdmin(),
                    field: UserInfoModel.surnameColumn,
                    type: PlutoColumnType.text(),
                    width: 200,
                  ),
                  PlutoColumn(
                    title: "Accommodation".tr(),
                    enableEditingMode: DataService.isAdmin(),
                    field: UserInfoModel.accommodationColumn,
                    type: PlutoColumnType.text(),
                    readOnly: false,
                    width: 150,
                  ),
                  PlutoColumn(
                    title: "Phone".tr(),
                    enableEditingMode: DataService.isAdmin(),
                    field: UserInfoModel.phoneColumn,
                    type: PlutoColumnType.text(),
                    width: 200,
                  ),
                  PlutoColumn(
                    title: "Sex".tr(),
                    enableEditingMode: DataService.isAdmin(),
                    field: UserInfoModel.sexColumn,
                    type: PlutoColumnType.select(UserInfoModel.sexes, defaultValue: UserInfoModel.sexes.first),
                    formatter: (value) => DataGridHelper.textTransform(value, UserInfoModel.sexes, UserInfoModel.sexToLocale),
                    applyFormatterInEditing: true,
                    width: 100,
                  ),
                  PlutoColumn(
                    title: "Birthday".tr(),
                    enableEditingMode: DataService.isAdmin(),
                    field: UserInfoModel.birthDateColumn,
                    type: PlutoColumnType.date(defaultValue: DateTime.now()),
                    width: 140,
                  ),
                  PlutoColumn(
                    title: "Admin".tr(),
                    field: UserInfoModel.isAdminReadOnlyColumn,
                    type: PlutoColumnType.select([]),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, UserInfoModel.isAdminReadOnlyColumn, DataService.isAdmin),
                  ),
                  PlutoColumn(
                    title: "Editor".tr(),
                    field: UserInfoModel.isEditorReadOnlyColumn,
                    type: PlutoColumnType.select([]),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, UserInfoModel.isEditorReadOnlyColumn, DataService.isAdmin),
                  ),
                  PlutoColumn(
                    title: "Role".tr(),
                    enableEditingMode: DataService.isAdmin(),
                    field: UserInfoModel.roleColumn,
                    type: PlutoColumnType.text(),
                    width: 100,
                  )
                ]).DataGrid(),
          ]
        ),
      ),
    );
  }

  List<UserInfoModel> _allUsers = [];
  Future<void> _import(SingleTableDataGrid dataGrid) async {
    await UserManagementHelper.import(context);
    await dataGrid.reloadData();
  }

  Future<void> _generatePassword(SingleTableDataGrid dataGrid) async {
    var users = List<UserInfoModel>.from(dataGrid.stateManager.refRows.originalList.where((element) => element.checked == true).map((x) => UserInfoModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.id != null).toList();
    var really = await DialogHelper.showConfirmationDialogAsync(context, "Generate password".tr(), "${"Users get new password via e-mail".tr()} (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}", confirmButtonMessage: "Proceed".tr());
    if(!really) {
      return;
    }

    bool changePassToUnsignedUsersOnly = false;
    var reallyAll = await DialogHelper.showConfirmationDialogAsync(context, "Change password".tr(), "Change password to users who have been already signed in?".tr(), confirmButtonMessage: "Proceed".tr());
    if(!reallyAll) {
      changePassToUnsignedUsersOnly = true;
    }

    for(var u in users) {
      await UserManagementHelper.generateAndUpdatePasswordFromUser(u, changePassToUnsignedUsersOnly);
    }
  }

  Future<void> _setPassword(SingleTableDataGrid dataGrid) async {
    var users = List<UserInfoModel>.from(dataGrid.stateManager.refRows.originalList.where((element) => element.checked == true).map((x) => UserInfoModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.id != null).toList();
    var really = await DialogHelper.showConfirmationDialogAsync(context, "Change password".tr(), "${"Users will get a new password".tr()} (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}", confirmButtonMessage: "Proceed".tr());
    if(!really) {
      return;
    }

    for(var u in users) {
      var pw = await UserManagementHelper.unsafeChangeUserPassword(u);
      await MailerSendHelper.sendPassword(u, pw);
    }
  }

  Future<void> _addToGroup(SingleTableDataGrid dataGrid) async {
    var users = List<UserInfoModel>.from(dataGrid.stateManager.refRows.originalList.where((element) => element.checked == true).map((x) => UserInfoModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.id != null).toList();
    var allGroups = await DataService.getAllUserGroupInfo();
    var chosenGroup = await DialogHelper.showAddToGroupDialogAsync(context, allGroups);
    if(chosenGroup == null)
    {
      return;
    }
    chosenGroup.participants!.addAll(users);
    await DataService.updateUserGroupParticipants(chosenGroup, chosenGroup.participants!);

    for (var value in dataGrid.stateManager.refRows.originalList) {
      value.setChecked(false);
    }

    ToastHelper.Show("Updated {item}.".tr(namedArgs: {"item":chosenGroup.title}));
  }
}