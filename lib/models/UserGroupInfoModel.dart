import 'package:pluto_grid/pluto_grid.dart';

import '../models/PlutoAbstract.dart';
import '../services/DataService.dart';
import 'UserInfoModel.dart';

class UserGroupInfoModel extends IPlutoRowModel {

  int? id;
  String title;
  UserInfoModel? leader;
  int? place;
  String? description;
  List<UserInfoModel> participants;

  UserGroupInfoModel({
    required this.id,
    required this.title,
    this.leader,
    this.description,
    this.place,
    required this.participants,
    });

  factory UserGroupInfoModel.fromJson(Map<String, dynamic> json) {
    return UserGroupInfoModel(
      id: json[idColumn],
      title: json.containsKey(titleColumn) ? json[titleColumn] : null,
      place: json.containsKey(placeColumn) ? json[placeColumn] : null,
      description: json.containsKey(descriptionColumn) ? json[descriptionColumn] : null,
      leader: json.containsKey(userInfoTable) ? UserInfoModel.fromJson(json[userInfoTable]) : null,
      participants: json.containsKey(userGroupsTable) ? List<UserInfoModel>.from(json[userGroupsTable].map((e)=>UserInfoModel.fromJson(e["user_info"]))) : []
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
      leader: json[leaderColumn],
      participants: json[participantsColumn] == "" ? [] : json[participantsColumn]
    );
  }

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      titleColumn: PlutoCell(value: title),
      leaderColumn: PlutoCell(value: leader),
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
