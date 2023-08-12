import 'dart:math';

import 'package:av_app/dataGrids/SingleTableDataGrid.dart';
import 'package:av_app/models/ExclusiveGroupModel.dart';
import 'package:av_app/models/PlaceModel.dart';
import 'package:av_app/models/UserInfoModel.dart';
import 'package:av_app/services/DataGridHelper.dart';
import 'package:av_app/services/DataService.dart';
import 'package:av_app/services/ImportHelper.dart';
import 'package:av_app/services/MailerSendHelper.dart';
import 'package:av_app/services/ToastHelper.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
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
  late SingleTableDataGrid<UserInfoModel> usersDataGrid;

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    await DataService.getCurrentUserInfo();
    if(!DataService.isAdmin())
    {
      Navigator.pop(context);
    }
    loadData();
  }

  Future<void> loadData() async {
    var placesRaws =  await DataService.getPlaces();
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
              enableEditingMode: false,
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
      length: 4,
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
                      enableEditingMode: false,
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
                    enableEditingMode: false,
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
                      title: "události",
                      field: ExclusiveGroupModel.eventsColumn,
                      type: PlutoColumnType.text(),
                      width: 500
                  ),
                ]).DataGrid(),
            usersDataGrid.DataGrid()
          ]
        ),
      ),
    );
  }

  Future<void> _import() async {
    var file = await DialogHelper.dropFilesHere(context, "Import uživatelů z CSV tabulky", "Potvrdit", "Storno");
    if(file==null) {
      return;
    }
    var users = await ImportHelper.getUsersFromFile(file);

    var really = await DialogHelper.showConfirmationDialogAsync(context,
        "Import uživatelů",
        "Uživatelé (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}",
        confirmButtonMessage: "Potvrdit");

    bool importNewOnly = await DialogHelper.showConfirmationDialogAsync(context,
        "Importovat pouze nové",
        "Pouze uživatelé, kteří nejsou v tabulce.",
        confirmButtonMessage: "Pouze nové", cancelButtonMessage: "Importovat všechny");

    if(!really)
    {
      return;
    }
    var existingUsers = await DataService.getAllUsers();
    for(var u in users)
    {
      if(importNewOnly && existingUsers.any((element) => element.email == u.email))
      {
        continue;
      }
      u.id = await DataService.getUserByEmail(u.email);
      if(u.id == null)
      {
        u.id = await DataService.createUser(u.email);
        ToastHelper.Show("Vytvořen ${u.email}");
      }
      await DataService.updateUser(u);
      ToastHelper.Show("Upraven ${u.toBasicString()}");
    }
    await usersDataGrid.reloadData();
  }

  Future<void> _generatePassword() async {
    var users = List<UserInfoModel>.from(usersDataGrid.stateManager.checkedRows.map((x) => UserInfoModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.id != null).toList();
    var really = await DialogHelper.showConfirmationDialogAsync(context, "Generovat heslo", "Uživatelé dostanou nové heslo emailem (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}", confirmButtonMessage: "Generovat");
    if(!really)
    {
      return;
    }

    var numberFormat = NumberFormat("####");
    var random = Random();
    for(var u in users)
    {
      var password = "av${numberFormat.format(random.nextInt(9999))}";
      await DataService.updateUserPassword(u.id!, password);
      ToastHelper.Show("Uživateli ${u.email} bylo změněno heslo.");
      MailerSendHelper.sendPassword(u, password);
    }
  }
}