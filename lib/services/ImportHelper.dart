import 'package:csv/csv.dart';
import 'package:cross_file/cross_file.dart';

import '../models/UserInfoModel.dart';

class ImportHelper {
static int getIndex(String s, List<String> row)
{
  return row.indexOf(UserInfoModel.migrateColumns[s]!);
}

static Future<List<UserInfoModel>> getUsersFromFile(XFile file) async {
  final rawData = await file.readAsString();
  final fields = const CsvToListConverter().convert(rawData);

  List<UserInfoModel> userList = [];

  var firstRow = fields[0].map((e) => e.toString()).toList();
  for(int r = 1; r < fields.length; r++)
  {
    var email = fields[r][ImportHelper.getIndex(UserInfoModel.emailColumn, firstRow)].toString().trim();
    if(email.isEmpty){
      continue;
    }
    var sex = fields[r][ImportHelper.getIndex(UserInfoModel.sexColumn, firstRow)].toString();
    if(sex.isEmpty){
      continue;
    }
    var accomodation = fields[r][ImportHelper.getIndex(UserInfoModel.accommodationColumn, firstRow)].toString();
    if(accomodation.toLowerCase() == "storno")
    {
      continue;
    }
    sex = sex.trim().toLowerCase().startsWith("m") ? "male" : "female";
    var user = UserInfoModel.fromJson({
      UserInfoModel.idColumn:null,
      UserInfoModel.emailColumn:email.toString(),
      UserInfoModel.nameColumn:fields[r][ImportHelper.getIndex(UserInfoModel.nameColumn, firstRow)].toString(),
      UserInfoModel.surnameColumn:fields[r][ImportHelper.getIndex(UserInfoModel.surnameColumn, firstRow)].toString(),
      UserInfoModel.sexColumn:sex,
      UserInfoModel.roleColumn:fields[r][ImportHelper.getIndex(UserInfoModel.roleColumn, firstRow)].toString(),
      UserInfoModel.phoneColumn:fields[r][ImportHelper.getIndex(UserInfoModel.phoneColumn, firstRow)].toString(),
      UserInfoModel.accommodationColumn:accomodation,
    });
    userList.add(user);
}
  return userList;
}
}