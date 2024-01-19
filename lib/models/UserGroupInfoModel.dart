import 'package:pluto_grid/pluto_grid.dart';

import '../dataGrids/PlutoAbstract.dart';
import '../data/DataService.dart';
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
  Set<UserInfoModel> participants;

  UserGroupInfoModel({
    required this.id,
    required this.title,
    this.leaderId,
    this.leader,
    this.description,
    this.place,
    this.placeId,
    required this.participants,
    });

  factory UserGroupInfoModel.fromJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
      id: json[idColumn],
      leaderId: json.containsKey(leaderColumn) ? json[leaderColumn] : null,
      title: json.containsKey(titleColumn) ? json[titleColumn] : null,
      placeId: json.containsKey(placeColumn) ? json[placeColumn] : null,
      place: json.containsKey(PlaceModel.placeTable) && json[PlaceModel.placeTable] != null ? PlaceModel.fromJson(json[PlaceModel.placeTable]) : null,
      description: json.containsKey(descriptionColumn) ? json[descriptionColumn] : null,
      leader: json[userInfoTable] != null ? UserInfoModel.fromJson(json[userInfoTable]) : null,
      participants: json.containsKey(userGroupsTable) ?
      Set<UserInfoModel>.from(json[userGroupsTable].
      map((e)=>UserInfoModel.fromJson(
        e["user_info"] != null ?
        e["user_info"] :
        e["user_info_public"] != null ?
        e["user_info_public"]:
        {}
      ))) : {},
  );
  }


  static const String idColumn = "id";
  static const String titleColumn = "title";
  static const String descriptionColumn = "description";
  static const String placeColumn = "place";
  static const String leaderColumn = "leader";

  static const String participantsColumn = "participants";
  static const String userGroupInfoTable = "user_group_info";
  static const String userGroupsTable = "user_groups";
  static const String userInfoTable = "user_info";


  static UserGroupInfoModel fromPlutoJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
      id: json[idColumn] == -1 ? null : json[idColumn],
      title: json[titleColumn],
      leader: json[leaderColumn] == "" ? null : json[leaderColumn],
      description: json[descriptionColumn],
      participants: json[participantsColumn] == "" ? [] : json[participantsColumn],
      place: (json[placeColumn] as PlaceModel?)
    );
  }

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      titleColumn: PlutoCell(value: title),
      leaderColumn: PlutoCell(value: leader),
      descriptionColumn: PlutoCell(value: description),
      placeColumn: PlutoCell(value: place),
      participantsColumn: PlutoCell(value: participants),
    });
  }

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
