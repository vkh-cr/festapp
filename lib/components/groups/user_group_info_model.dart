import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/components/information/information_model.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/components/groups/db_groups.dart';
import 'package:trina_grid/trina_grid.dart';
import '../map/place_model.dart';
import 'group_participant_model.dart';

class UserGroupInfoModel extends ITrinaRowModel {
  Map<int, String> checkpointTitlesDict = {};

  static const String progressColumn = "progress";
  static const String participantsColumn = "participants";
  static const String participantsManagementColumn = "participantsManagement";
  static const String isAdminColumn = "is_admin";
  static const String modelReference = "modelReference";

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
          ? Set<GroupParticipantModel>.from(json[Tb.user_groups.table]
              .map((e) => GroupParticipantModel.fromJson(e)))
          : json[participantsColumn] != null
              ? Set<GroupParticipantModel>.from(json[participantsColumn]
                  .map((p) => GroupParticipantModel.fromJson(p)))
              : {},
      isAdmin: json[isAdminColumn],
    );
  }

  static UserGroupInfoModel fromPlutoJson(Map<String, dynamic> json) {
    // The reference model is the source of truth for complex data like participants.
    final model = json[modelReference] as UserGroupInfoModel;

    // Update the model with values from directly editable cells.
    model.title = json[Tb.user_group_info.title];
    model.description =
        DataGridHelper.getValueOrNull(json[Tb.user_group_info.description]);
    model.place = json[Tb.user_group_info.place] as PlaceModel?;
    return model;
  }

  static UserGroupInfoModel fromGamePlutoJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
        id: json[Tb.user_group_info.id],
        title: json[Tb.user_group_info.title],
        description: json[Tb.user_group_info.description],
        type: InformationModel.gameType,
        participants: json[participantsColumn] is Set<GroupParticipantModel>
            ? json[participantsColumn]
            : {},
        place: (json[Tb.user_group_info.place] as PlaceModel?),
        isAdmin: json[isAdminColumn]);
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    var checkpoints = (data?["game"] ?? [])
        .where((item) => checkpointTitlesDict.containsKey(item["check_point"]))
        .map((item) => checkpointTitlesDict[item["check_point"]])
        .toList();
    checkpoints.sort();
    var progressText = "${checkpoints.length} [${checkpoints.join(",")}]";

    return TrinaRow(cells: {
      Tb.user_group_info.id: TrinaCell(value: id),
      Tb.user_group_info.title: TrinaCell(value: title),
      Tb.user_group_info.description: TrinaCell(value: description),
      Tb.user_group_info.place: TrinaCell(value: place),
      Tb.user_group_info.type: TrinaCell(value: type ?? ""),
      progressColumn: TrinaCell(value: progressText),
      isAdminColumn: TrinaCell(value: isAdmin),
      participantsManagementColumn:
          TrinaCell(value: getParticipantsDisplayValue()),
      modelReference: TrinaCell(value: this),
    });
  }

  String getParticipantsDisplayValue() {
    if (participants == null || participants!.isEmpty) {
      return "No one assigned".tr();
    }
    final leader = participants!.firstWhereOrNull((p) => p.isAdmin == true);
    final members = participants!.where((p) => p.isAdmin != true);

    final parts = <String>[];
    if (leader != null) {
      parts.add("⭐ ${leader.userInfo!.toFullNameString()}");
    }
    if (members.isNotEmpty) {
      parts.add(members.map((p) => p.userInfo!.toFullNameString()).join(', '));
    }
    return parts.join(' | ');
  }

  Map<String, dynamic> toJson() {
    // The backend expects an integer ID. UUIDs are for client-side identification of new rows.
    return {
      Tb.user_group_info.id: id,
      Tb.user_group_info.title: title,
      PlaceModel.placeObjectColumn: place?.toJson(),
      Tb.user_group_info.description: description,
      Tb.user_group_info.type: type,
      Tb.user_group_info.data: data,
      "participants": participants
          ?.map((p) => {
                "user_id": p.userInfo?.id,
                "is_admin": p.isAdmin ?? false,
              })
          .toList(),
    };
  }

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
