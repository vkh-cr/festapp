import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models/information_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models/user_group_info_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services/db_groups.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:trina_grid/trina_grid.dart';

class GameUserGroupsContent extends StatefulWidget {
  const GameUserGroupsContent({super.key});

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
          TrinaColumn(
            hide: true,
            title: "Id".tr(),
            field: Tb.user_group_info.id,
            type: TrinaColumnType.number(defaultValue: -1),
            readOnly: true,
            enableEditingMode: false,
            width: 50,
            renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
          ),
          TrinaColumn(
            title: "Name".tr(),
            field: Tb.user_group_info.title,
            type: TrinaColumnType.text(),
            width: 200,
          ),
          TrinaColumn(
            title: "Progress".tr(),
            field: UserGroupInfoModel.progressColumn,
            readOnly: true,
            type: TrinaColumnType.text(),
            width: 200,
          ),
          TrinaColumn(
            title: "Participants".tr(),
            field: UserGroupInfoModel.participantsColumn,
            type: TrinaColumnType.text(defaultValue: <UserInfoModel>{}),
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