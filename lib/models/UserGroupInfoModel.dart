import 'package:avapp/models/Tb.dart';
import 'package:pluto_grid/pluto_grid.dart';

import '../data/DataService.dart';
import '../dataGrids/PlutoAbstract.dart';
import 'PlaceModel.dart';
import 'UserInfoModel.dart';

class UserGroupInfoModel extends IPlutoRowModel {
  int? id;
  String title;
  UserInfoModel? leader;
  PlaceModel? place;
  int? placeId;
  String? leaderId;
  String? description;
  Set<UserInfoModel>? participants = {};

  UserGroupInfoModel({
    required this.id,
    required this.title,
    this.leaderId,
    this.leader,
    this.description,
    this.place,
    this.placeId,
    this.participants,
  });

  factory UserGroupInfoModel.fromJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
      id: json[idColumn],
      leaderId: json[leaderColumn],
      title: json[titleColumn],
      placeId: json[placeColumn],
      place: json[PlaceModel.placeTable] != null
          ? PlaceModel.fromJson(json[PlaceModel.placeTable])
          : json[PlaceModel.placeObjectColumn] != null
              ? PlaceModel.fromJson(json[PlaceModel.placeObjectColumn])
              : null,
      description: json[descriptionColumn],
      leader: json[Tb.user_info.table] != null
          ? UserInfoModel.fromJson(json[Tb.user_info.table])
          : json[Tb.user_info_public.table] != null
              ? UserInfoModel.fromJson(json[Tb.user_info_public.table])
              : json[leaderUserColumn] != null
                  ? UserInfoModel.fromJson(json[leaderUserColumn])
                  : null,
      participants: json.containsKey(userGroupsTable)
          ? Set<UserInfoModel>.from(json[userGroupsTable].map((e) =>
              UserInfoModel.fromJson(e[Tb.user_info.table] ??
                  (e[Tb.user_info_public.table] ?? {}))))
          : json[participantsColumn] != null
              ? Set<UserInfoModel>.from(json[participantsColumn]
                  .map((p) => UserInfoModel.fromJson(p)))
              : {},
    );
  }

  static const String idColumn = "id";
  static const String titleColumn = "title";
  static const String descriptionColumn = "description";
  static const String placeColumn = "place";
  static const String leaderColumn = "leader";
  static const String leaderUserColumn = "leaderUser";

  static const String participantsColumn = "participants";
  static const String userGroupInfoTable = "user_group_info";
  static const String userGroupsTable = "user_groups";

  static UserGroupInfoModel fromPlutoJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
        id: json[idColumn] == -1 ? null : json[idColumn],
        title: json[titleColumn],
        leader: json[leaderUserColumn] == "" ? null : json[leaderUserColumn],
        description: json[descriptionColumn],
        participants:
            json[participantsColumn] == "" ? [] : json[participantsColumn],
        place: (json[placeColumn] as PlaceModel?));
  }

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      titleColumn: PlutoCell(value: title),
      leaderUserColumn: PlutoCell(value: leader),
      descriptionColumn: PlutoCell(value: description),
      placeColumn: PlutoCell(value: place),
      participantsColumn: PlutoCell(value: participants),
    });
  }

  Map toJson() => {
        idColumn: id,
        titleColumn: title,
        leaderUserColumn: leader,
        PlaceModel.placeObjectColumn: place,
        descriptionColumn: description,
        participantsColumn: participants?.toList()
      };

  @override
  Future<void> deleteMethod() async {
    await DataService.deleteUserGroupInfo(this);
  }

  @override
  Future<void> updateMethod() async {
    await DataService.updateUserGroupInfo(this);
  }

  @override
  String toBasicString() => title;
}
