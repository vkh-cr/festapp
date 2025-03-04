import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/DbGroups.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class GameUserGroupsContent extends StatefulWidget {
  const GameUserGroupsContent({Key? key}) : super(key: key);

  @override
  _GameUserGroupsContentState createState() => _GameUserGroupsContentState();
}

class _GameUserGroupsContentState extends State<GameUserGroupsContent> {
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
      SingleDataGridController<UserGroupInfoModel>(
        context: context,
        loadData: () => DbGroups.getAllUserGroupInfo(InformationModel.gameType),
        fromPlutoJson: UserGroupInfoModel.fromGamePlutoJson,
        firstColumnType: DataGridFirstColumn.delete,
        idColumn: Tb.user_group_info.id,
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
            width: 200,
          ),
          PlutoColumn(
            title: "Progress".tr(),
            field: UserGroupInfoModel.progressColumn,
            readOnly: true,
            type: PlutoColumnType.text(),
            width: 200,
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
              if (currentValue != null && currentValue.toString().isNotEmpty) {
                participants = (rendererContext.row.cells[UserGroupInfoModel.participantsColumn]?.value as Set<UserInfoModel>);
                userNames = participants.join(", ");
              }
              return Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  IconButton(
                    onPressed: () async {
                      if (_allUsers.isEmpty) {
                        _allUsers = await DbUsers.getAllUsersBasics();
                      }
                      DialogHelper.chooseUser(
                        context,
                            (person) => setState(() {
                          rendererContext.row.cells[UserGroupInfoModel.participantsColumn]?.value.add(person);
                          var cell = rendererContext.row.cells[UserGroupInfoModel.participantsColumn]!;
                          rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
                        }),
                        _allUsers,
                        "Add".tr(),
                      );
                    },
                    icon: const Icon(Icons.add_circle_rounded),
                  ),
                  IconButton(
                    onPressed: () async {
                      var cell = rendererContext.row.cells[UserGroupInfoModel.participantsColumn]!;
                      rendererContext.stateManager.changeCellValue(cell, <UserInfoModel>{}, force: true);
                    },
                    icon: const Icon(Icons.remove_circle),
                  ),
                  Text("(${participants.length}) $userNames"),
                ],
              );
            },
          ),
        ],
      ),
    );
  }
}