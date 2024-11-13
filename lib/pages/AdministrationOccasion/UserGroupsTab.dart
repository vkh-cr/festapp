import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/DbGroups.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class UserGroupsTab extends StatefulWidget {
  const UserGroupsTab({Key? key}) : super(key: key);

  @override
  _UserGroupsTabState createState() => _UserGroupsTabState();
}

class _UserGroupsTabState extends State<UserGroupsTab> {
  List<UserInfoModel> _allUsers = [];

  @override
  void initState() {
    super.initState();
    loadAllUsers();
  }

  Future<void> loadAllUsers() async {
    _allUsers = await DbUsers.getAllUsersBasics();
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<UserGroupInfoModel>(
        context,
        DbGroups.getAllUserGroupInfo,
        UserGroupInfoModel.fromPlutoJson,
        DataGridFirstColumn.delete,
        Tb.user_group_info.id,
        columns: [
          PlutoColumn(
            hide: true,
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
              field: Tb.user_group_info.title,
              type: PlutoColumnType.text(),
              width: 200
          ),
          PlutoColumn(
              title: "Moderator".tr(),
              field: Tb.user_group_info.leader,
              type: PlutoColumnType.text(),
              enableEditingMode: false,
              width: 200,
              renderer: (rendererContext) {
                String? userName;
                var currentValue = rendererContext.row.cells[Tb.user_group_info.leader]?.value;
                if(currentValue!=null && currentValue.toString().isNotEmpty)
                {
                  var user = (rendererContext.row.cells[Tb.user_group_info.leader]?.value as UserInfoModel);
                  userName = user.toString();
                }
                return Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      IconButton(
                          onPressed: () async{
                            if(_allUsers.isEmpty)
                            {
                              _allUsers = await DbUsers.getAllUsersBasics();
                            }
                            DialogHelper.chooseUser(context, (person) =>
                                setState(() {
                                  rendererContext.row.cells[Tb.user_group_info.leader]?.value = person;
                                  var cell = rendererContext.row.cells[Tb.user_group_info.leader]!;
                                  rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
                                  RouterService.goBack(context);
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
                              _allUsers = await DbUsers.getAllUsersBasics();
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
                      RouterService.navigatePageInfo(context, HtmlEditorRoute(content: {HtmlEditorPage.parContent: oldText})).then((value) async {
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
              field: Tb.user_group_info.place,
              type: PlutoColumnType.text(defaultValue: null),
              renderer: (rendererContext) {
                return ElevatedButton(
                    onPressed: () async {
                      var title = rendererContext.row.cells[Tb.user_group_info.title]?.value;
                      var placeModel = rendererContext.row.cells[Tb.user_group_info.place]?.value as PlaceModel?;
                      placeModel ??= PlaceModel(id: null, title: title, description: "", type: "group", isHidden: true, latLng: SynchroService.globalSettingsModel!.defaultMapLocation);

                      RouterService.navigatePageInfo(context, MapRoute(place: placeModel)).then((value) async {
                        if(value != null)
                        {
                          placeModel!.latLng = value;
                          var cell = rendererContext.row.cells[Tb.user_group_info.place]!;
                          rendererContext.stateManager.changeCellValue(cell, placeModel, force: true);
                        }
                      });
                    },
                    child: Row(children: [const Icon(Icons.location_pin), Padding(padding: const EdgeInsets.all(6), child: const Text("Location").tr()) ])
                );
              })
        ]).DataGrid();
  }
}