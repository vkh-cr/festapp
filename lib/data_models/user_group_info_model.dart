import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/information_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_groups.dart';
import 'package:trina_grid/trina_grid.dart';
import 'place_model.dart';
import 'user_info_model.dart';

class UserGroupInfoModel extends ITrinaRowModel {
  Map<int, String> checkpointTitlesDict = {};

  static const String progressColumn = "progress";
  static const String participantsColumn = "participants";

  @override
  int? id;
  String title;
  UserInfoModel? leader;
  PlaceModel? place;
  int? placeId;
  String? leaderId;
  String? description;
  String? type;
  Map<String, dynamic>? data;
  Set<UserInfoModel>? participants = {};

  UserGroupInfoModel({
    required this.id,
    required this.title,
    this.leaderId,
    this.leader,
    this.description,
    this.type,
    this.data,
    this.place,
    this.placeId,
    this.participants,
  });

  factory UserGroupInfoModel.fromJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
      id: json[Tb.user_group_info.id],
      leaderId: json[Tb.user_group_info.leader] is String ? json[Tb.user_group_info.leader] : null,
      title: json[Tb.user_group_info.title],
      type: json[Tb.user_group_info.type],
      data: json[Tb.user_group_info.data],
      placeId: json[Tb.user_group_info.place],
      place: json[Tb.places.table] != null
          ? PlaceModel.fromJson(json[Tb.places.table])
          : json[PlaceModel.placeObjectColumn] != null
              ? PlaceModel.fromJson(json[PlaceModel.placeObjectColumn])
              : null,
      description: json[Tb.user_group_info.description],
      leader: json[Tb.user_info.table] != null
              ? UserInfoModel.fromJson(json[Tb.user_info.table])
              : json[Tb.user_group_info.leader] != null && json[Tb.user_group_info.leader] is Map
                  ? UserInfoModel.fromJson(json[Tb.user_group_info.leader])
                  : null,
      participants: json.containsKey(Tb.user_groups.table)
          ? Set<UserInfoModel>.from(json[Tb.user_groups.table].map((e) =>
              UserInfoModel.fromJson(e[Tb.user_info.table] ??
                  (e[Tb.user_info.table] ?? {}))))
          : json[participantsColumn] != null
              ? Set<UserInfoModel>.from(json[participantsColumn]
                  .map((p) => UserInfoModel.fromJson(p)))
              : {},
    );
  }
  
  static UserGroupInfoModel fromPlutoJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
        id: json[Tb.user_group_info.id] == -1 ? null : json[Tb.user_group_info.id],
        title: json[Tb.user_group_info.title],
        leader: DataGridHelper.getValueOrNull(json[Tb.user_group_info.leader]),
        description: json[Tb.user_group_info.description],
        type: DataGridHelper.getValueOrNull(json[Tb.user_group_info.type]),
        participants:
            json[participantsColumn] == "" ? [] : json[participantsColumn],
        place: (json[Tb.user_group_info.place] as PlaceModel?));
  }

  static UserGroupInfoModel fromGamePlutoJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
        id: json[Tb.user_group_info.id] == -1 ? null : json[Tb.user_group_info.id],
        title: json[Tb.user_group_info.title],
        leader: DataGridHelper.getValueOrNull(json[Tb.user_group_info.leader]),
        description: json[Tb.user_group_info.description],
        type: InformationModel.gameType,
        participants:
        json[participantsColumn] == "" ? [] : json[participantsColumn],
        place: (json[Tb.user_group_info.place] as PlaceModel?));
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    var checkpoints = (data?["game"] ?? [])
        .where((item) => checkpointTitlesDict.containsKey(item["check_point"])) // Filter out non-existent checkpoints
        .map((item) => checkpointTitlesDict[item["check_point"]])
        .toList();

    checkpoints.sort();

    var progressText = "${checkpoints.length} [${checkpoints.join(",")}]";

    return TrinaRow(cells: {
      Tb.user_group_info.id: TrinaCell(value: id),
      Tb.user_group_info.title: TrinaCell(value: title),
      Tb.user_group_info.leader: TrinaCell(value: leader),
      Tb.user_group_info.description: TrinaCell(value: description),
      Tb.user_group_info.place: TrinaCell(value: place),
      Tb.user_group_info.type: TrinaCell(value: type ?? ""),
      participantsColumn: TrinaCell(value: participants),
      progressColumn: TrinaCell(value: progressText),
    });
  }

  Map toJson() => {
        Tb.user_group_info.id: id,
        Tb.user_group_info.title: title,
        Tb.user_group_info.leader: leader,
        PlaceModel.placeObjectColumn: place,
        Tb.user_group_info.description: description,
        Tb.user_group_info.type: type,
        Tb.user_group_info.data: data,
        participantsColumn: participants?.toList()
      };

  @override
  Future<void> deleteMethod() async {
    await DbGroups.deleteUserGroupInfo(this);
  }

  @override
  Future<void> updateMethod() async {
    await DbGroups.updateUserGroupInfo(this);
  }

  @override
  String toBasicString() => title;
}
