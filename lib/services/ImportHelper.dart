import 'package:csv/csv.dart';
import 'package:cross_file/cross_file.dart';
import 'package:intl/intl.dart';

import '../models/UserInfoModel.dart';

class ImportHelper {
static int getIndex(String s, List<String> row)
{
  return row.indexOf(UserInfoModel.migrateColumns[s]!);
}

static Future<List<Map<String, dynamic>>> getUsersFromFile(XFile file) async {
  final rawData = await file.readAsString();
  final fields = const CsvToListConverter().convert(rawData);

  List<Map<String, dynamic>> userList = [];

  var firstRow = fields[0].map((e) => e.toString()).toList();
  Map<String, int> userColumnIndex = {};
  for(var keyValue in UserInfoModel.migrateColumns.entries) {
    var index = firstRow.indexOf(keyValue.value);
    if(index == -1) {
      continue;
    }
    userColumnIndex[keyValue.key] = index;
  }

  if(!userColumnIndex.keys.toSet().containsAll([
    UserInfoModel.emailReadonlyColumn,
    UserInfoModel.sexColumn,
    UserInfoModel.nameColumn,
    UserInfoModel.surnameColumn,
  ])){
    throw Exception("Table doesn't contain required columns.");
  }

  for(int r = 1; r < fields.length; r++)
  {
    Map<String, dynamic> userJsonObject = {};
    for(var entry in userColumnIndex.entries)
    {
      var trimmedString = fields[r][entry.value].toString().trim();
      if(entry.key == UserInfoModel.emailReadonlyColumn)
      {
        if(trimmedString.isEmpty){
          continue;
        }
        trimmedString = trimmedString.toLowerCase();
      }
      else if(entry.key == UserInfoModel.sexColumn)
      {
        if(trimmedString.isEmpty){
          continue;
        }
        trimmedString = trimmedString.toLowerCase().startsWith("m") ? "male" : "female";
      }
      else if(entry.key == UserInfoModel.birthDateColumn)
      {
        if(trimmedString.isEmpty){
          continue;
        }
        final format = DateFormat("d/M/y");
        var dateTime = format.parse(trimmedString);
        userJsonObject[entry.key] = dateTime;
      }
      userJsonObject[entry.key] = trimmedString;
      continue;
    }
    userList.add(userJsonObject);
}
  return userList;
}
}