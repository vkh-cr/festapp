import 'dart:math';

import 'package:av_app/dataGrids/SingleTableDataGrid.dart';
import 'package:av_app/models/ExclusiveGroupModel.dart';
import 'package:av_app/models/PlaceModel.dart';
import 'package:av_app/models/UserGroupInfoModel.dart';
import 'package:av_app/models/UserInfoModel.dart';
import 'package:av_app/pages/MapPage.dart';
import 'package:av_app/services/DataGridHelper.dart';
import 'package:av_app/services/DataService.dart';
import 'package:av_app/services/ImportHelper.dart';
import 'package:av_app/services/MailerSendHelper.dart';
import 'package:av_app/services/ToastHelper.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:pluto_grid/pluto_grid.dart';
import 'package:search_page/search_page.dart';

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
  late SingleTableDataGrid<UserInfoModel> usersDataGrid;

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    await DataService.getCurrentUserInfo();
    if(!DataService.isAdmin())
    {
      Navigator.pop(context);
      return;
    }
    loadData();
  }

  Future<void> loadData() async {
    var placesRaws =  await DataService.getMapPlaces();
    var placesStrings = placesRaws.map((p)=>p.toPlutoSelectString()).toList();
    placesStrings.add(PlaceModel.WithouPlace);
    places = placesStrings;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    usersDataGrid = SingleTableDataGrid<UserInfoModel>(
        DataService.getUsers,
        UserInfoModel.fromPlutoJson,
        headerChildren: [
          ElevatedButton(
            onPressed: _import,
            child: const Text('Import'),
          ),
          ElevatedButton(
            onPressed: _generatePassword,
            child: const Text('Generovat heslo'),
          ),
        ],
        columns: [
          PlutoColumn(
              title: "",
              field: "delete",
              type: PlutoColumnType.text(),
              readOnly: true,
              enableRowChecked: true,
              enableFilterMenuItem: false,
              enableSorting: false,
              enableDropToResize: false,
              enableColumnDrag: false,
              enableContextMenu: false,
              cellPadding: EdgeInsets.zero,
              width: 80,
              renderer: (rendererContext) {
                return IconButton(
                    onPressed: () async{
                      final id = rendererContext.row.cells[UserInfoModel.idColumn]?.value as String?;
                      if (id?.isEmpty == true){
                        rendererContext.stateManager.removeRows([rendererContext.row]);
                        return;
                      }
                      setState(() {
                        rendererContext.row.setState(rendererContext.row.state == PlutoRowState.none ? PlutoRowState.added : PlutoRowState.none);
                      });
                    },
                    icon: const Icon(Icons.delete_forever));
              }),
          PlutoColumn(
              title: "Id",
              field: UserInfoModel.idColumn,
              type: PlutoColumnType.text(),
              readOnly: true,
              width: 50),
          PlutoColumn(
              title: "E-mail",
              field: UserInfoModel.emailColumn,
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
            title: "Admin",
            field: UserInfoModel.isAdminColumn,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, setState),
          ),
          PlutoColumn(
            title: "Recepční",
            field: UserInfoModel.isReceptionAdminColumn,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, setState),
          ),
          PlutoColumn(
            title: "Role",
            field: UserInfoModel.roleColumn,
            type: PlutoColumnType.text(),
            width: 100,
          )
        ]);
    return DefaultTabController(
      length: 5,
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
                  )
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
                columns: [
                  PlutoColumn(
                      title: "",
                      field: "delete",
                      type: PlutoColumnType.text(),
                      readOnly: true,
                      enableFilterMenuItem: false,
                      enableSorting: false,
                      enableDropToResize: false,
                      enableColumnDrag: false,
                      enableContextMenu: false,
                      cellPadding: EdgeInsets.zero,
                      width: 40,
                      renderer: (rendererContext) {
                        return IconButton(
                            onPressed: () async{
                              final id = rendererContext.row.cells[InformationModel.idColumn]?.value as int?;
                              if (id == -1){
                                rendererContext.stateManager.removeRows([rendererContext.row]);
                                return;
                              }
                              setState(() {
                                rendererContext.row.setState(rendererContext.row.state == PlutoRowState.none ? PlutoRowState.added : PlutoRowState.none);
                              });
                            },
                            icon: const Icon(Icons.delete_forever));
                      }),
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
                                    rendererContext.row.cells[InformationModel.descriptionColumn]?.value = newText;
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
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, setState),
                  ),
                ]).DataGrid(),
            SingleTableDataGrid<EventModel>(
                DataService.getEventsWithPlaces,
                EventModel.fromPlutoJson,
                columns: [
                  PlutoColumn(
                      title: "",
                      field: "delete",
                      type: PlutoColumnType.text(),
                      readOnly: true,
                      enableFilterMenuItem: false,
                      enableSorting: false,
                      enableDropToResize: false,
                      enableColumnDrag: false,
                      enableContextMenu: false,
                      cellPadding: EdgeInsets.zero,
                      width: 100,
                      renderer: (rendererContext) {
                        return Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              IconButton(
                                  onPressed: () async{
                                    final id = rendererContext.row.cells[EventModel.idColumn]?.value as int?;
                                    if (id == -1){
                                      rendererContext.stateManager.removeRows([rendererContext.row]);
                                      return;
                                    }
                                    setState(() {
                                      rendererContext.row.setState(rendererContext.row.state == PlutoRowState.none ? PlutoRowState.added : PlutoRowState.none);
                                    });
                                  },
                                  icon: const Icon(Icons.delete_forever)),
                              IconButton(
                                  onPressed: () async{
                                    var originRow = rendererContext.row;
                                    var newRow = rendererContext.stateManager.getNewRows()[0];
                                    newRow.cells[EventModel.idColumn]?.value = -1;
                                    newRow.cells[EventModel.titleColumn]?.value = originRow.cells[EventModel.titleColumn]?.value;
                                    newRow.cells[EventModel.startDateColumn]?.value = originRow.cells[EventModel.startDateColumn]?.value;
                                    newRow.cells[EventModel.startTimeColumn]?.value = originRow.cells[EventModel.startTimeColumn]?.value;
                                    newRow.cells[EventModel.endDateColumn]?.value = originRow.cells[EventModel.endDateColumn]?.value;
                                    newRow.cells[EventModel.endTimeColumn]?.value = originRow.cells[EventModel.endTimeColumn]?.value;
                                    newRow.cells[EventModel.maxParticipantsColumn]?.value = originRow.cells[EventModel.maxParticipantsColumn]?.value;
                                    newRow.cells[EventModel.splitForMenWomenColumn]?.value = originRow.cells[EventModel.splitForMenWomenColumn]?.value;
                                    newRow.cells[EventModel.placeColumn]?.value = originRow.cells[EventModel.placeColumn]?.value;
                                    newRow.cells[EventModel.parentEventColumn]?.value = originRow.cells[EventModel.parentEventColumn]?.value;
                                    newRow.cells[EventModel.descriptionHiddenColumn]?.value = originRow.cells[EventModel.descriptionHiddenColumn]?.value;
                                    newRow.cells[EventModel.descriptionColumn]?.value = originRow.cells[EventModel.descriptionColumn]?.value;
                                    var currentIndex = rendererContext.stateManager.rows.indexOf(originRow);
                                    rendererContext.stateManager.insertRows(currentIndex+1, [newRow]);

                                    setState(() {
                                      newRow.setState(PlutoRowState.updated);
                                    });
                                  },
                                  icon: const Icon(Icons.add)),]
                        );
                      }),
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
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, setState),
                  ),
                  PlutoColumn(
                    title: "Skupinka",
                    field: EventModel.isGroupEventColumn,
                    type: PlutoColumnType.select(places),
                    applyFormatterInEditing: true,
                    enableEditingMode: false,
                    width: 100,
                    renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, setState),
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
                      title: "Zobrazit v události",
                      field: EventModel.parentEventColumn,
                      type: PlutoColumnType.text(),
                      width: 300
                  ),
                ]).DataGrid(),
            SingleTableDataGrid<ExclusiveGroupModel>(
                DataService.getExclusiveGroups,
                ExclusiveGroupModel.fromPlutoJson,
                columns: [
                  PlutoColumn(
                      title: "",
                      field: "delete",
                      type: PlutoColumnType.text(),
                      readOnly: true,
                      enableFilterMenuItem: false,
                      enableSorting: false,
                      enableDropToResize: false,
                      enableColumnDrag: false,
                      enableContextMenu: false,
                      cellPadding: EdgeInsets.zero,
                      width: 100,
                      renderer: (rendererContext) {
                        return Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              IconButton(
                                  onPressed: () async{
                                    final id = rendererContext.row.cells[EventModel.idColumn]?.value as int?;
                                    if (id == -1){
                                      rendererContext.stateManager.removeRows([rendererContext.row]);
                                      return;
                                    }
                                    setState(() {
                                      rendererContext.row.setState(rendererContext.row.state == PlutoRowState.none ? PlutoRowState.added : PlutoRowState.none);
                                    });
                                  },
                                  icon: const Icon(Icons.delete_forever)),
                            ]
                        );
                      }),
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
                columns: [
                  PlutoColumn(
                      title: "",
                      field: "delete",
                      type: PlutoColumnType.text(),
                      readOnly: true,
                      enableFilterMenuItem: false,
                      enableSorting: false,
                      enableDropToResize: false,
                      enableColumnDrag: false,
                      enableContextMenu: false,
                      cellPadding: EdgeInsets.zero,
                      width: 100,
                      renderer: (rendererContext) {
                        return Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              IconButton(
                                  onPressed: () async{
                                    final id = rendererContext.row.cells[EventModel.idColumn]?.value as int?;
                                    if (id == -1){
                                      rendererContext.stateManager.removeRows([rendererContext.row]);
                                      return;
                                    }
                                    setState(() {
                                      rendererContext.row.setState(rendererContext.row.state == PlutoRowState.none ? PlutoRowState.added : PlutoRowState.none);
                                    });
                                  },
                                  icon: const Icon(Icons.delete_forever)),
                            ]
                        );
                      }),
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
                                    showSearch(
                                        context: context,
                                        delegate: SearchPage<UserInfoModel>(
                                          showItemsOnEmpty: true,
                                          items: _allUsers,
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
                                            title: Text(person.name!),
                                            subtitle: Text(person.surname!),
                                            trailing: Column(
                                              crossAxisAlignment: CrossAxisAlignment.end,
                                              children: [
                                                ElevatedButton(
                                                    onPressed: () {
                                                      rendererContext.row.cells[UserGroupInfoModel.leaderColumn]?.value = person;
                                                      Navigator.pop(context);
                                                    },
                                                    child: const Text("Nastavit")),
                                                Text(person.email!),
                                              ],
                                            ),
                                          ),
                                        ));

                                    setState(() {
                                      rendererContext.row.setState(PlutoRowState.updated);
                                    });
                                  },
                                  icon: const Icon(Icons.add_circle_rounded)),
                              Text(userName??""),]
                        );
                      }
                  ),
                  PlutoColumn(
                      title: "Členové skupinky",
                      field: UserGroupInfoModel.participantsColumn,
                      type: PlutoColumnType.text(defaultValue: <UserInfoModel>[]),
                      enableEditingMode: false,
                      width: 1000,
                      renderer: (rendererContext) {
                        String? userNames;
                        List<UserInfoModel> participants = [];
                        var currentValue = rendererContext.row.cells[UserGroupInfoModel.participantsColumn]?.value;
                        if(currentValue!=null && currentValue.toString().isNotEmpty)
                        {
                          participants = (rendererContext.row.cells[UserGroupInfoModel.participantsColumn]?.value as List<UserInfoModel>);
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
                                    showSearch(
                                        context: context,
                                        delegate: SearchPage<UserInfoModel>(
                                          showItemsOnEmpty: true,
                                          items: _allUsers,
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
                                            title: Text(person.name!),
                                            subtitle: Text(person.surname!),
                                            trailing: Column(
                                              crossAxisAlignment: CrossAxisAlignment.end,
                                              children: [
                                                ElevatedButton(
                                                    onPressed: () {
                                                      rendererContext.row.cells[UserGroupInfoModel.participantsColumn]?.value.add(person);
                                                      //Navigator.pop(context);
                                                    },
                                                    child: const Text("Přidat")),
                                                Text(person.email!),
                                              ],
                                            ),
                                          ),
                                        ));

                                    setState(() {
                                      rendererContext.row.setState(PlutoRowState.updated);
                                    });
                                  },
                                  icon: const Icon(Icons.add_circle_rounded)),
                              IconButton(
                                  onPressed: () async{
                                    (rendererContext.row.cells[UserGroupInfoModel.participantsColumn]?.value as List<UserInfoModel>).clear();
                                    setState(() {
                                      rendererContext.row.setState(PlutoRowState.updated);
                                    });
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
                              var id = rendererContext.row.cells[UserGroupInfoModel.idColumn]?.value as int;
                              if(id==-1)
                              {
                                ToastHelper.Show("Pro výběr místa skupinku nejdřív ulož!");
                                return;
                              }

                              var model = rendererContext.row.cells[UserGroupInfoModel.placeColumn]?.value as UserGroupInfoModel;
                              model.place ??= PlaceModel(id: null, title: model.title, description: "", type: "group", isHidden: true, latLng: PlaceModel.DefaultPosition);
                              if(model.place!.id == null)
                              {
                                model.place = await DataService.updatePlace(model.place!);
                                await DataService.updateUserGroupInfo(model);
                              }
                              Navigator.pushNamed(context, MapPage.ROUTE, arguments: model.place!.id);
                            },
                            child: const Row(children: [Icon(Icons.location_pin), Padding(padding: EdgeInsets.all(6), child: Text("Vybrat")) ])
                        );
                      }),
                ]).DataGrid(),
            usersDataGrid.DataGrid()
          ]
        ),
      ),
    );
  }
  List<UserInfoModel> _allUsers = [];
  Future<void> _import() async {
    var file = await DialogHelper.dropFilesHere(context, "Import uživatelů z CSV tabulky", "Potvrdit", "Storno");
    if(file==null) {
      return;
    }
    var users = await ImportHelper.getUsersFromFile(file);
    var addOrUpdateUsers = users.where((element) => element.accommodation!.toLowerCase() != "storno");
    var deleteUsers = users.where((element) => element.accommodation!.toLowerCase() == "storno");

    var really = await DialogHelper.showConfirmationDialogAsync(context,
        "Import uživatelů",
        "Uživatelé (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}",
        confirmButtonMessage: "Potvrdit");

    if(!really)
    {
      return;
    }

    var existingUsers = await DataService.getUsers();

    List<UserInfoModel> toBeCreated = [];
    List<UserInfoModel> toBeUpdated = [];
    for(var u in addOrUpdateUsers)
    {
      var existing = existingUsers.firstWhereOrNull((element) => element.email!.toLowerCase() == u.email!.toLowerCase());
      if(existing == null) {
        toBeCreated.add(u);
        continue;
      }
      else if(existing.importedEquals(u)) {
        continue;
      }
      else{
        u.id = existing.id;
        toBeUpdated.add(u);
      }
    }

    if(toBeCreated.isNotEmpty) {
      var really = await DialogHelper.showConfirmationDialogAsync(context,
          "Vytvoření uživatelů",
          "Tito uživatelé jsou noví. Chcete je vytvořit?\n"
              "Uživatelé (${toBeCreated.length}):\n${toBeCreated.map((value) => value.toBasicString()).toList().join(",\n")}",
          confirmButtonMessage: "Potvrdit");

      if(really) {
        toBeCreated.forEach((u) async {
          u.id = await DataService.createUser(u.email!);
          await DataService.updateUser(u);
          await _generateAndUpdatePasswordFromUser(u, true);
          ToastHelper.Show("Vytvořen ${u.email} a odeslán e-mail s vygenerovaným heslem.");
        });
      }
    }

    if(toBeUpdated.isNotEmpty) {
      var really = await DialogHelper.showConfirmationDialogAsync(context,
          "Úprava uživatelů",
          "Tito uživatelé byli upraveni. Chcete aktualizovat údaje?\n"
              "Uživatelé (${toBeUpdated.length}):\n${toBeUpdated.map((value) => value.toBasicString()).toList().join(",\n")}",
          confirmButtonMessage: "Potvrdit");

      if(really) {
        toBeUpdated.forEach((u) async {
          await DataService.updateUser(u);
          ToastHelper.Show("Upraven ${u.toBasicString()}.");
        });
      }
    }

    List<UserInfoModel> toBeDeleted = [];
    for(var u in deleteUsers)
    {
      var existing = existingUsers.firstWhereOrNull((element) => element.email == u.email);
      var duplicated = addOrUpdateUsers.firstWhereOrNull((element) => element.email == u.email);

      if(existing != null && duplicated == null) {
        toBeDeleted.add(existing);
      }
    }

    if(toBeDeleted.isNotEmpty) {
      var reallyDelete = await DialogHelper.showConfirmationDialogAsync(context,
          "Vymazání uživatelů",
          "Tito uživatelé byli stornování, přesto stále existují v systému aplikace. Chcete je vymazat?\n"
           "Uživatelé (${toBeDeleted.length}):\n${toBeDeleted.map((value) => value.toBasicString()).toList().join(",\n")}",
          confirmButtonMessage: "Potvrdit");

      if(reallyDelete) {
        toBeDeleted.forEach((existing) async {
          await DataService.deleteUser(existing.id!);
          ToastHelper.Show("Smazán ${existing.toBasicString()}");
        });
      }
    }

    await usersDataGrid.reloadData();
  }

  Future<void> _generateAndUpdatePasswordFromUser(UserInfoModel u, bool ignoreIfAlreadySignedIn)
  async {
    //ignore already signed users
    if(ignoreIfAlreadySignedIn)
    {
      var time = await DataService.getLastTimeSignIn(u.id!);
      if(time!=null)
      {
        ToastHelper.Show("Uživateli ${u.email} nebylo změněno heslo, protože už se s ním přihlásil.");
        return;
      }
    }

    var password = "av${numberFormat.format((random.nextInt(8999)+1000))}";
    await DataService.updateUserPassword(u.id!, password);
    ToastHelper.Show("Uživateli ${u.email} bylo změněno heslo.");
    MailerSendHelper.sendPassword(u, password);
    await Future.delayed(const Duration(milliseconds: 500));
  }
  var random = Random();
  var numberFormat = NumberFormat("####");

  Future<void> _generatePassword() async {
    var users = List<UserInfoModel>.from(usersDataGrid.stateManager.checkedRows.map((x) => UserInfoModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.id != null).toList();
    var really = await DialogHelper.showConfirmationDialogAsync(context, "Generovat heslo", "Uživatelé dostanou nové heslo emailem (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}", confirmButtonMessage: "Generovat");
    if(!really)
    {
      return;
    }

    for(var u in users)
    {
      await _generateAndUpdatePasswordFromUser(u, true);
    }
  }
}