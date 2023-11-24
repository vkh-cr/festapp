import 'package:avapp/dataGrids/SingleTableDataGrid.dart';
import 'package:avapp/models/ExclusiveGroupModel.dart';
import 'package:avapp/models/GlobalSettingsModel.dart';
import 'package:avapp/models/PlaceModel.dart';
import 'package:avapp/models/UserGroupInfoModel.dart';
import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/pages/MapPage.dart';
import 'package:avapp/services/DataGridHelper.dart';
import 'package:avapp/services/DataService.dart';
import 'package:avapp/services/MailerSendHelper.dart';
import 'package:avapp/services/MapIconService.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:avapp/services/UserManagementHelper.dart';
import 'package:flutter/material.dart';
import 'package:pluto_grid/pluto_grid.dart';

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

class _AdministrationPageState extends State<AdministrationPage> {
  List<String> places = [];
  List<PlutoColumn> columns = [];
  List<String> mapIcons = [];
  late SingleTableDataGrid<UserInfoModel> usersDataGrid;

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    await DataService.getCurrentUserInfo();
    if(!DataService.isEditor())
    {
      Navigator.pop(context);
      return;
    }
    loadData();
  }

  Future<void> loadData() async {
    var placesRaws =  await DataService.getMapPlaces();
    var placesStrings = placesRaws.map((p)=>p.toPlutoSelectString()).toList();
    placesStrings.add(PlaceModel.WithouValue);
    places = placesStrings;

    mapIcons = MapIconHelper.type2Icon.keys.toList();
    mapIcons.add(PlaceModel.WithouValue);

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    usersDataGrid = SingleTableDataGrid<UserInfoModel>(
        DataService.getUsers,
        UserInfoModel.fromPlutoJson,
        DataGridFirstColumn.deleteAndCheck,
        UserInfoModel.idColumn,
        headerChildren: [
          ElevatedButton(
            onPressed: _import,
            child: const Text('Import'),
          ),
          ElevatedButton(
            onPressed: _generatePassword,
            child: const Text('Generovat heslo'),
          ),
          ElevatedButton(
            onPressed: _setPassword,
            child: const Text('Změnit heslo'),
          ),
          ElevatedButton(
            onPressed: _addToGroup,
            child: const Text('Přidat do skupiny'),
          ),
        ],
        columns: [
          PlutoColumn(
              title: "Id",
              field: UserInfoModel.idColumn,
              type: PlutoColumnType.text(),
              readOnly: true,
              width: 50),
          PlutoColumn(
              title: "E-mail",
              field: UserInfoModel.emailReadonlyColumn,
              type: PlutoColumnType.text(),
              checkReadOnly: (row, cell) {
                final id = row.cells[UserInfoModel.idColumn]?.value as String?;
                return id != null && id.isNotEmpty;
              },
              width: 200
          ),
          PlutoColumn(
            title: "Jméno",
            field: UserInfoModel.nameColumn,
            type: PlutoColumnType.text(),
            width: 200,
          ),
          PlutoColumn(
            title: "Příjmení",
            field: UserInfoModel.surnameColumn,
            type: PlutoColumnType.text(),
            width: 200,
          ),
          PlutoColumn(
            title: "Ubytování",
            field: UserInfoModel.accommodationColumn,
            type: PlutoColumnType.text(),
            readOnly: true,
            width: 150,
          ),
          PlutoColumn(
            title: "Telefon",
            field: UserInfoModel.phoneColumn,
            type: PlutoColumnType.text(),
            width: 200,
          ),
          PlutoColumn(
            title: "Pohlaví",
            field: UserInfoModel.sexColumn,
            type: PlutoColumnType.select(["male", "female"]),
            formatter: (value) => DataGridHelper.returnQuestionMarkOnInvalid(value, ["male", "female"]),
            applyFormatterInEditing: true,
            width: 100,
          ),
          PlutoColumn(
            title: "Datum narození",
            field: UserInfoModel.birthDateColumn,
            type: PlutoColumnType.date(defaultValue: DateTime.now()),
            width: 140,
          ),
          PlutoColumn(
            title: "Admin",
            field: UserInfoModel.isAdminReadOnlyColumn,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, UserInfoModel.isAdminReadOnlyColumn),
          ),
          PlutoColumn(
            title: "Editor",
            field: UserInfoModel.isEditorReadOnlyColumn,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, UserInfoModel.isEditorReadOnlyColumn),
          ),
          PlutoColumn(
            title: "Role",
            field: UserInfoModel.roleColumn,
            type: PlutoColumnType.text(),
            width: 100,
          )
        ]);
    return DefaultTabController(
      length: 6,
      child: Scaffold(
          appBar: AppBar(
          title: const Text("Admin"),
          bottom: const PreferredSize(
            preferredSize: Size.fromHeight(40),
            child: Align(
              alignment: Alignment.centerLeft,
              child: TabBar(
                  isScrollable: true,
                tabs: [
                  Row(
                  children: [
                    Icon(Icons.info),
                    Padding(padding: EdgeInsets.all(12), child: Text("Info"))
                  ]
                ),
                  Row(
                      children: [
                        Icon(Icons.calendar_month),
                        Padding(padding: EdgeInsets.all(12), child: Text("Události"))
                      ]
                  ),
                  Row(
                      children: [
                        Icon(Icons.pin_drop),
                        Padding(padding: EdgeInsets.all(12), child: Text("Místa"))
                      ]
                  ),
                  Row(
                      children: [
                        Icon(Icons.punch_clock_rounded),
                        Padding(padding: EdgeInsets.all(12), child: Text("Exkluzivita"))
                      ]
                  ),
                  Row(
                      children: [
                        Icon(Icons.groups),
                        Padding(padding: EdgeInsets.all(12), child: Text("Skupinky"))
                      ]
                  ),
                  Row(
                      children: [
                        Icon(Icons.people),
                        Padding(padding: EdgeInsets.all(12), child: Text("Uživatelé"))
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
          physics: const NeverScrollableScrollPhysics(),
          children: [
            SingleTableDataGrid<InformationModel>(
                DataService.getInformation,
                InformationModel.fromPlutoJson,
                DataGridFirstColumn.deleteAndDuplicate,
                InformationModel.idColumn,
                columns: [
                  PlutoColumn(
                      title: "Id",
                      field: InformationModel.idColumn,
                      type: PlutoColumnType.number(defaultValue: -1),
                      readOnly: true,
                      width: 50,
                      renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),),
                  PlutoColumn(
                      title: "Nadpis",
                      field: InformationModel.titleColumn,
                      type: PlutoColumnType.text()),
                  PlutoColumn(
                      width: 150,
                      title: "Popis",
                      field: InformationModel.descriptionColumn,
                      type: PlutoColumnType.text(),
                      renderer: (rendererContext) {
                        return ElevatedButton(
                            onPressed: () async{
                              var oldText = rendererContext.row.cells[InformationModel.descriptionColumn]?.value;
                              Navigator.pushNamed(context, HtmlEditorPage.ROUTE, arguments: oldText).then((value) async {
                                if(value != null)
                                {
                                  var newText = value as String;
                                  if(newText!=oldText)
                                  {
                                    var cell = rendererContext.row.cells[InformationModel.descriptionColumn]!;
                                    rendererContext.stateManager.changeCellValue(cell, newText, force: true);
                                  }
                                }
                              });},
                            child: const Row(children: [Icon(Icons.edit), Padding(padding: EdgeInsets.all(6), child: Text("Editovat")) ])
                        );
                      }),
                  PlutoColumn(
                    title: "Pořadí",
                    field: InformationModel.orderColumn,
                    type: PlutoColumnType.number(defaultValue: null),
                    applyFormatterInEditing: true,
                    width: 100,
                  ),
                  PlutoColumn(
                    title: "Skrýt",
                    field: InformationModel.isHiddenColumn,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, InformationModel.isHiddenColumn),
                  ),
                ]).DataGrid(),
            SingleTableDataGrid<EventModel>(
                DataService.getEventsWithPlaces,
                EventModel.fromPlutoJson,
                DataGridFirstColumn.deleteAndDuplicate,
                EventModel.idColumn,
                columns: [
                  PlutoColumn(
                    title: "Id",
                    field: EventModel.idColumn,
                    type: PlutoColumnType.number(defaultValue: -1),
                    readOnly: true,
                    width: 50,
                    renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
                  ),
                  PlutoColumn(
                      title: "Nadpis",
                      field: EventModel.titleColumn,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                  PlutoColumn(
                    title: "Datum začátku",
                    field: EventModel.startDateColumn,
                    type: PlutoColumnType.date(defaultValue: DateTime.now()),
                    width: 140,
                  ),
                  PlutoColumn(
                    title: "Začátek",
                    field: EventModel.startTimeColumn,
                    type: PlutoColumnType.time(),
                    width: 100,
                  ),
                  PlutoColumn(
                    title: "Datum konce",
                    field: EventModel.endDateColumn,
                    type: PlutoColumnType.date(defaultValue: DateTime.now()),
                    width: 140,
                  ),
                  PlutoColumn(
                    title: "Konec",
                    field: EventModel.endTimeColumn,
                    type: PlutoColumnType.time(),
                    width: 100,
                  ),
                  PlutoColumn(
                    title: "Max",
                    field: EventModel.maxParticipantsColumn,
                    type: PlutoColumnType.number(negative: false, defaultValue: null),
                    width: 70,
                  ),
                  PlutoColumn(
                    title: "M/Ž 50/50",
                    field: EventModel.splitForMenWomenColumn,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, EventModel.splitForMenWomenColumn),
                  ),
                  PlutoColumn(
                    title: "Skupinka",
                    field: EventModel.isGroupEventColumn,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, EventModel.isGroupEventColumn),
                  ),
                  PlutoColumn(
                    title: "Místo",
                    field: EventModel.placeColumn,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    formatter: DataGridHelper.GetValueFromFormatted,
                  ),
                  PlutoColumn(
                    field: EventModel.descriptionHiddenColumn,
                    type: PlutoColumnType.text(defaultValue: ""),
                    readOnly: true,
                    hide: true,
                    title: "",
                  ),
                  PlutoColumn(
                      width: 150,
                      title: "Popis",
                      enableFilterMenuItem: false,
                      enableContextMenu: false,
                      enableSorting: false,
                      field: EventModel.descriptionColumn,
                      type: PlutoColumnType.text(defaultValue: ""),
                      renderer: (rendererContext) {
                        return ElevatedButton(
                            onPressed: () async{
                              String? textToEdit;
                              String? oldText = rendererContext.row.cells[EventModel.descriptionHiddenColumn]?.value;
                              if(oldText!=null)
                              {
                                textToEdit = oldText;
                              }
                              if(textToEdit == null)
                              {
                                var eventId = rendererContext.row.cells[EventModel.idColumn]!.value;

                                if(eventId!=null)
                                {
                                  var fullEvent = await DataService.getEvent(eventId);
                                  textToEdit = fullEvent.description;
                                }
                              }

                              Navigator.pushNamed(context, HtmlEditorPage.ROUTE, arguments: textToEdit).then((value) async {
                                if(value != null)
                                {
                                  var newText = value as String;
                                  if(newText!=textToEdit)
                                  {
                                    rendererContext.row.cells[EventModel.descriptionHiddenColumn]?.value = newText;
                                    var cell = rendererContext.row.cells[EventModel.descriptionColumn]!;
                                    rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
                                  }
                                }
                              });},
                            child: const Row(children: [Icon(Icons.edit), Padding(padding: EdgeInsets.all(6), child: Text("Editovat")) ])
                        );
                      }),
                  PlutoColumn(
                      title: "Zobrazit v události",
                      field: EventModel.parentEventColumn,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                ]).DataGrid(),
            SingleTableDataGrid<PlaceModel>(
                DataService.getPlaces,
                PlaceModel.fromPlutoJson,
                DataGridFirstColumn.deleteAndDuplicate,
                PlaceModel.idColumn,
                columns: [
                  PlutoColumn(
                    title: "Id",
                    field: PlaceModel.idColumn,
                    type: PlutoColumnType.number(defaultValue: -1),
                    readOnly: true,
                    width: 50,
                    renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
                  ),
                  PlutoColumn(
                      title: "Nadpis",
                      field: PlaceModel.titleColumn,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                  PlutoColumn(
                      title: "Popis",
                      field: PlaceModel.descriptionColumn,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                  PlutoColumn(
                    title: "Ikonka",
                    field: PlaceModel.typeColumn,
                    type: PlutoColumnType.select(mapIcons),
                    renderer: (rendererContext) => DataGridHelper.mapIconRenderer(rendererContext, setState),
                  ),
                  PlutoColumn(
                    title: "Skryté",
                    field: PlaceModel.isHiddenColumn,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, PlaceModel.isHiddenColumn),
                  ),
                  PlutoColumn(
                      width: 150,
                      title: "Pozice na mapě",
                      enableFilterMenuItem: false,
                      enableContextMenu: false,
                      enableSorting: false,
                      field: PlaceModel.coordinatesColumn,
                      type: PlutoColumnType.text(),
                      renderer: (rendererContext) {
                        return ElevatedButton(
                            onPressed: () async {
                              var placeModel = PlaceModel.fromPlutoJson(rendererContext.row.toJson());
                              Navigator.pushNamed(context, MapPage.ROUTE, arguments: placeModel).then((value) async {
                                  if(value != null)
                                  {
                                    var cell = rendererContext.row.cells[PlaceModel.coordinatesColumn]!;
                                    rendererContext.stateManager.changeCellValue(cell, value, force: true);
                                  }
                                 });
                              },
                            child: const Row(children: [Icon(Icons.edit), Padding(padding: EdgeInsets.all(6), child: Text("Editovat")) ])
                        );
                      }),
                ]).DataGrid(),
            SingleTableDataGrid<ExclusiveGroupModel>(
                DataService.getExclusiveGroups,
                ExclusiveGroupModel.fromPlutoJson,
                DataGridFirstColumn.delete,
                ExclusiveGroupModel.idColumn,
                columns: [
                  PlutoColumn(
                    title: "Id",
                    field: ExclusiveGroupModel.idColumn,
                    type: PlutoColumnType.number(defaultValue: -1),
                    readOnly: true,
                    enableEditingMode: false,
                    width: 50,
                    renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
                  ),
                  PlutoColumn(
                      title: "Název skupiny",
                      field: ExclusiveGroupModel.titleColumn,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                  PlutoColumn(
                      title: "Události",
                      field: ExclusiveGroupModel.eventsColumn,
                      type: PlutoColumnType.text(),
                      width: 500
                  ),
                ]).DataGrid(),
            SingleTableDataGrid<UserGroupInfoModel>(
                DataService.getUserGroupInfoList,
                UserGroupInfoModel.fromPlutoJson,
                DataGridFirstColumn.delete,
                UserGroupInfoModel.idColumn,
                columns: [
                  PlutoColumn(
                    title: "Id",
                    field: UserGroupInfoModel.idColumn,
                    type: PlutoColumnType.number(defaultValue: -1),
                    readOnly: true,
                    enableEditingMode: false,
                    width: 50,
                    renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
                  ),
                  PlutoColumn(
                      title: "Název skupinky",
                      field: UserGroupInfoModel.titleColumn,
                      type: PlutoColumnType.text(),
                      width: 200
                  ),
                  PlutoColumn(
                      title: "Vedoucí",
                      field: UserGroupInfoModel.leaderColumn,
                      type: PlutoColumnType.text(),
                      enableEditingMode: false,
                      width: 200,
                      renderer: (rendererContext) {
                        String? userName;
                        var currentValue = rendererContext.row.cells[UserGroupInfoModel.leaderColumn]?.value;
                        if(currentValue!=null && currentValue.toString().isNotEmpty)
                        {
                          var user = (rendererContext.row.cells[UserGroupInfoModel.leaderColumn]?.value as UserInfoModel);
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
                                      rendererContext.row.cells[UserGroupInfoModel.leaderColumn]?.value = person;
                                      var cell = rendererContext.row.cells[UserGroupInfoModel.leaderColumn]!;
                                      rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
                                      Navigator.pop(context);
                                    }), _allUsers, "Nastavit");
                                  },
                                  icon: const Icon(Icons.add_circle_rounded)),
                              Text(userName??""),]
                        );
                      }
                  ),
                  PlutoColumn(
                      title: "Členové skupinky",
                      field: UserGroupInfoModel.participantsColumn,
                      type: PlutoColumnType.text(defaultValue: <UserInfoModel>{}),
                      enableEditingMode: false,
                      width: 1000,
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
                                        }), _allUsers, "Přidat");
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
                      title: "Popis",
                      enableFilterMenuItem: false,
                      enableContextMenu: false,
                      enableSorting: false,
                      field: UserGroupInfoModel.descriptionColumn,
                      type: PlutoColumnType.text(defaultValue: null),
                      renderer: (rendererContext) {
                        return ElevatedButton(
                            onPressed: () async{
                              var id = rendererContext.row.cells[UserGroupInfoModel.idColumn]?.value as int;
                              if(id==-1)
                              {
                                ToastHelper.Show("Pro úpravu popisu skupinku nejdřív ulož!");
                                return;
                              }
                              var model = rendererContext.row.cells[UserGroupInfoModel.descriptionColumn]?.value as UserGroupInfoModel;
                              String? oldText = model.description;
                              String? textToEdit = "";
                              textToEdit = oldText;
                              Navigator.pushNamed(context, HtmlEditorPage.ROUTE, arguments: textToEdit).then((value) async {
                                if(value != null)
                                {
                                  var newText = value as String;
                                  if(newText!=textToEdit)
                                  {
                                    var model = rendererContext.row.cells[UserGroupInfoModel.descriptionColumn]?.value as UserGroupInfoModel?;
                                    model?.description = newText;
                                    setState(() {
                                      rendererContext.row.setState(PlutoRowState.updated);
                                    });
                                  }
                                }
                              });},
                            child: const Row(children: [Icon(Icons.edit), Padding(padding: EdgeInsets.all(6), child: Text("Editovat")) ])
                        );
                      }),
                  PlutoColumn(
                      width: 150,
                      title: "Místo",
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

                              Navigator.pushNamed(context, MapPage.ROUTE, arguments: placeModel).then((value) async {
                                if(value != null)
                                {
                                  placeModel!.latLng = value;
                                  var cell = rendererContext.row.cells[UserGroupInfoModel.placeColumn]!;
                                  rendererContext.stateManager.changeCellValue(cell, placeModel, force: true);
                                }
                              });
                            },
                            child: const Row(children: [Icon(Icons.location_pin), Padding(padding: EdgeInsets.all(6), child: Text("Vybrat")) ])
                        );
                      }),
                ]).DataGrid(),
            usersDataGrid.DataGrid(),

          ]
        ),
      ),
    );
  }

  List<UserInfoModel> _allUsers = [];
  Future<void> _import() async {
    await UserManagementHelper.import(context);
    await usersDataGrid.reloadData();
  }

  Future<void> _generatePassword() async {
    var users = List<UserInfoModel>.from(usersDataGrid.stateManager.checkedRows.map((x) => UserInfoModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.id != null).toList();
    var really = await DialogHelper.showConfirmationDialogAsync(context, "Generovat heslo", "Uživatelé dostanou nové heslo emailem (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}", confirmButtonMessage: "Generovat");
    if(!really) {
      return;
    }

    bool changePassToUnsignedUsersOnly = false;
    var reallyAll = await DialogHelper.showConfirmationDialogAsync(context, "Změnit heslo", "Měnit i už těm, kteří se aspoň jednou přihlásili?", confirmButtonMessage: "Změnit");
    if(!reallyAll) {
      changePassToUnsignedUsersOnly = true;
    }

    for(var u in users) {
      await UserManagementHelper.generateAndUpdatePasswordFromUser(u, changePassToUnsignedUsersOnly);
    }
  }

  Future<void> _setPassword() async {
    var users = List<UserInfoModel>.from(usersDataGrid.stateManager.checkedRows.map((x) => UserInfoModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.id != null).toList();
    var really = await DialogHelper.showConfirmationDialogAsync(context, "Změnit heslo", "Těmto uživatelům bude změno heslo: (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}", confirmButtonMessage: "Změnit");
    if(!really) {
      return;
    }

    for(var u in users) {
      var pw = await UserManagementHelper.unsafeChangeUserPassword(u);
      await MailerSendHelper.sendPassword(u, pw);
    }
  }

  Future<void> _addToGroup() async {
    var users = List<UserInfoModel>.from(usersDataGrid.stateManager.checkedRows.map((x) => UserInfoModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.id != null).toList();
    var allGroups = await DataService.getUserGroupInfoList();
    var chosenGroup = await DialogHelper.showAddToGroupDialogAsync(context, allGroups);
    if(chosenGroup == null)
    {
      return;
    }
    chosenGroup.participants.addAll(users);
    await DataService.updateUserGroupParticipants(chosenGroup, chosenGroup.participants);
    ToastHelper.Show("${chosenGroup.title} byla změněna.");
  }
}