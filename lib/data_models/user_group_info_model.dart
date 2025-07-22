import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/information_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_groups.dart';
import 'package:trina_grid/trina_grid.dart';
import 'group_participant_model.dart';
import 'place_model.dart';

class UserGroupInfoModel extends ITrinaRowModel {
  Map<int, String> checkpointTitlesDict = {};

  static const String progressColumn = "progress";
  static const String participantsColumn = "participants";
  static const String leaderColumn = "leader";
  static const String isAdminColumn = "is_admin";

  @override
  int? id;
  String title;
  PlaceModel? place;
  int? placeId;
  String? description;
  String? type;
  Map<String, dynamic>? data;
  Set<GroupParticipantModel>? participants = {};
  bool? isAdmin;

  UserGroupInfoModel({
    required this.id,
    required this.title,
    this.description,
    this.type,
    this.data,
    this.place,
    this.placeId,
    this.participants,
    this.isAdmin,
  });

  factory UserGroupInfoModel.fromJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
      id: json[Tb.user_group_info.id],
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
      participants: json.containsKey(Tb.user_groups.table)
          ? Set<GroupParticipantModel>.from(
          json[Tb.user_groups.table].map((e) => GroupParticipantModel.fromJson(e)))
          : json[participantsColumn] != null
          ? Set<GroupParticipantModel>.from(
          json[participantsColumn].map((p) => GroupParticipantModel.fromJson(p)))
          : {},
      isAdmin: json[isAdminColumn],
    );
  }

  static UserGroupInfoModel fromPlutoJson(Map<String, dynamic> json) {
    var participants = json[participantsColumn] is Set<GroupParticipantModel> ? json[participantsColumn] : {};
    var leader = DataGridHelper.getValueOrNull(json[leaderColumn]);
    if(leader!=null){
      participants.add(leader);
    }

    return UserGroupInfoModel(
        id: json[Tb.user_group_info.id] == -1
            ? null
            : json[Tb.user_group_info.id],
        title: json[Tb.user_group_info.title],
        description: json[Tb.user_group_info.description],
        type: DataGridHelper.getValueOrNull(json[Tb.user_group_info.type]),
        participants: participants,
        place: (json[Tb.user_group_info.place] as PlaceModel?),
        isAdmin: json[isAdminColumn]);
  }

  static UserGroupInfoModel fromGamePlutoJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
        id: json[Tb.user_group_info.id] == -1
            ? null
            : json[Tb.user_group_info.id],
        title: json[Tb.user_group_info.title],
        description: json[Tb.user_group_info.description],
        type: InformationModel.gameType,
        participants:
        json[participantsColumn] is Set<GroupParticipantModel> ? json[participantsColumn] : {},
        place: (json[Tb.user_group_info.place] as PlaceModel?),
        isAdmin: json[isAdminColumn]);
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    var checkpoints = (data?["game"] ?? [])
        .where((item) => checkpointTitlesDict.containsKey(item["check_point"])) // Filter out non-existent checkpoints
        .map((item) => checkpointTitlesDict[item["check_point"]])
        .toList();

    checkpoints.sort();

    var progressText = "${checkpoints.length} [${checkpoints.join(",")}]";

    var leader = participants?.firstWhereOrNull((p) => p.isAdmin??false);
    var leaderCell =  TrinaCell(value: leader);
    participants?.remove(leader);

    return TrinaRow(cells: {
      Tb.user_group_info.id: TrinaCell(value: id),
      Tb.user_group_info.title: TrinaCell(value: title),
      leaderColumn: leaderCell,
      Tb.user_group_info.description: TrinaCell(value: description),
      Tb.user_group_info.place: TrinaCell(value: place),
      Tb.user_group_info.type: TrinaCell(value: type ?? ""),
      participantsColumn: TrinaCell(value: participants),
      progressColumn: TrinaCell(value: progressText),
      isAdminColumn: TrinaCell(value: isAdmin),
    });
  }

  Map<String, dynamic> toJson() => {
    Tb.user_group_info.id: id,
    Tb.user_group_info.title: title,
    PlaceModel.placeObjectColumn: place,
    Tb.user_group_info.description: description,
    Tb.user_group_info.type: type,
    Tb.user_group_info.data: data,
    participantsColumn: participants?.toList(),
    isAdminColumn: isAdmin,
  };

  @override
  Future<void> deleteMethod(BuildContext context) async {
    await DbGroups.deleteUserGroupInfo(this);
  }

  @override
  Future<void> updateMethod(BuildContext context) async {
    await DbGroups.updateUserGroupInfo(this);
  }

  @override
  String toBasicString() => title;
}
