import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models/user_group_info_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services/db_groups.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/utility/html_editor_page.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:trina_grid/trina_grid.dart';

class UserGroupsTab extends StatefulWidget {
  const UserGroupsTab({Key? key}) : super(key: key);

  @override
  _UserGroupsTabState createState() => _UserGroupsTabState();
}

class _UserGroupsTabState extends State<UserGroupsTab> {
  List<UserInfoModel> _allUsers = [];
  SingleDataGridController<UserGroupInfoModel>? controller;

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
  void didChangeDependencies() {
    super.didChangeDependencies();
    controller ??= SingleDataGridController<UserGroupInfoModel>(
        context: context,
        loadData: DbGroups.getAllUserGroupInfo,
        fromPlutoJson: UserGroupInfoModel.fromPlutoJson,
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
            renderer: (rendererContext) =>
                DataGridHelper.idRenderer(rendererContext),
          ),
          TrinaColumn(
            title: "Name".tr(),
            field: Tb.user_group_info.title,
            type: TrinaColumnType.text(),
            width: 200,
          ),
          TrinaColumn(
            title: "Moderator".tr(),
            field: Tb.user_group_info.leader,
            type: TrinaColumnType.text(),
            enableEditingMode: false,
            width: 200,
            renderer: (rendererContext) {
              String? userName;
              var currentValue =
                  rendererContext.row.cells[Tb.user_group_info.leader]?.value;
              if (currentValue != null &&
                  currentValue.toString().isNotEmpty) {
                var user = (rendererContext.row.cells[Tb.user_group_info.leader]
                    ?.value as UserInfoModel);
                userName = user.toString();
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
                          rendererContext.row.cells[Tb.user_group_info.leader]
                              ?.value = person;
                          var cell = rendererContext.row
                              .cells[Tb.user_group_info.leader]!;
                          rendererContext.stateManager
                              .changeCellValue(cell, cell.value, force: true);
                          RouterService.goBack(context);
                        }),
                        _allUsers,
                        "Set".tr(),
                      );
                    },
                    icon: const Icon(Icons.add_circle_rounded),
                  ),
                  Text(userName ?? ""),
                ],
              );
            },
          ),
          TrinaColumn(
            title: "Participants".tr(),
            field: UserGroupInfoModel.participantsColumn,
            type: TrinaColumnType.text(
              defaultValue: <UserInfoModel>{},
            ),
            enableEditingMode: false,
            width: 600,
            renderer: (rendererContext) {
              String? userNames;
              Set<UserInfoModel> participants = {};
              var currentValue = rendererContext.row
                  .cells[UserGroupInfoModel.participantsColumn]?.value;
              if (currentValue != null &&
                  currentValue.toString().isNotEmpty) {
                participants = (rendererContext.row
                    .cells[UserGroupInfoModel.participantsColumn]
                    ?.value as Set<UserInfoModel>);
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
                          rendererContext.row
                              .cells[UserGroupInfoModel.participantsColumn]
                              ?.value
                              .add(person);
                          var cell = rendererContext.row
                              .cells[UserGroupInfoModel.participantsColumn]!;
                          rendererContext.stateManager.changeCellValue(
                              cell, cell.value,
                              force: true);
                        }),
                        _allUsers,
                        "Add".tr(),
                      );
                    },
                    icon: const Icon(Icons.add_circle_rounded),
                  ),
                  IconButton(
                    onPressed: () async {
                      var cell = rendererContext.row
                          .cells[UserGroupInfoModel.participantsColumn]!;
                      rendererContext.stateManager
                          .changeCellValue(cell, <UserInfoModel>{}, force: true);
                    },
                    icon: const Icon(Icons.remove_circle),
                  ),
                  Text("(${participants.length}) $userNames"),
                ],
              );
            },
          ),
          TrinaColumn(
            width: 150,
            title: "Content".tr(),
            enableFilterMenuItem: false,
            enableContextMenu: false,
            enableSorting: false,
            field: Tb.user_group_info.description,
            type: TrinaColumnType.text(defaultValue: null),
            renderer: (rendererContext) {
              return ElevatedButton(
                onPressed: () async {
                  var oldText = rendererContext.row
                      .cells[Tb.user_group_info.description]!.value as String?;
                  RouterService.navigatePageInfo(
                    context,
                    HtmlEditorRoute(
                      content: {
                        HtmlEditorPage.parContent: oldText,
                      },
                      occasionId: RightsService.currentOccasionId
                    ),
                  ).then((value) async {
                    if (value != null) {
                      var newText = value as String;
                      if (newText != oldText) {
                        var cell = rendererContext.row
                            .cells[Tb.user_group_info.description]!;
                        rendererContext.stateManager.changeCellValue(
                            cell, newText,
                            force: true);
                      }
                    }
                  });
                },
                child: Row(
                  children: [
                    const Icon(Icons.edit),
                    Padding(
                      padding: const EdgeInsets.all(6),
                      child: Text("Edit".tr()),
                    ),
                  ],
                ),
              );
            },
          ),
          TrinaColumn(
            width: 150,
            title: "Place".tr(),
            enableFilterMenuItem: false,
            enableContextMenu: false,
            enableSorting: false,
            field: Tb.user_group_info.place,
            type: TrinaColumnType.text(defaultValue: null),
            renderer: (rendererContext) {
              return ElevatedButton(
                onPressed: () async {
                  var title = rendererContext.row
                      .cells[Tb.user_group_info.title]?.value;
                  var placeModel = rendererContext.row
                      .cells[Tb.user_group_info.place]?.value as PlaceModel?;
                  placeModel ??= PlaceModel(
                    id: null,
                    title: title,
                    description: "",
                    type: "group",
                    isHidden: true,
                    latLng: FeatureService.getDefaultLocation()
                  );
                  RouterService.navigatePageInfo(
                    context,
                    MapRoute(place: placeModel),
                  ).then((value) async {
                    if (value != null) {
                      placeModel!.latLng = value;
                      var cell = rendererContext.row
                          .cells[Tb.user_group_info.place]!;
                      rendererContext.stateManager.changeCellValue(
                          cell, placeModel,
                          force: true);
                    }
                  });
                },
                child: Row(
                  children: [
                    const Icon(Icons.location_pin),
                    Padding(
                      padding: const EdgeInsets.all(6),
                      child: const Text("Location").tr(),
                    ),
                  ],
                ),
              );
            },
          ),
        ],
      );
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<UserGroupInfoModel>(controller!);
  }
}
