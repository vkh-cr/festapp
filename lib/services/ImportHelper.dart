import 'package:festapp/models/Tb.dart';
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
    Tb.user_info.email_readonly,
    Tb.user_info.sex,
    Tb.user_info.name,
    Tb.user_info.surname,
  ])){
    throw Exception("Table doesn't contain required columns.");
  }

  for(int r = 1; r < fields.length; r++)
  {
    Map<String, dynamic> userJsonObject = {};
    for(var entry in userColumnIndex.entries)
    {
      var trimmedString = fields[r][entry.value].toString().trim();
      if(entry.key == Tb.user_info.email_readonly)
      {
        if(trimmedString.isEmpty){
          break;
        }
        trimmedString = trimmedString.toLowerCase();
      }
      else if(entry.key == Tb.occasion_users.role)
      {
        if(trimmedString.isEmpty){
          break;
        }
        var role = trimmedString.toLowerCase().startsWith("p") ? 1 : 2;
        userJsonObject[entry.key] = role;
        continue;
      }
      else if(entry.key == Tb.user_info.sex)
      {
        if(trimmedString.isEmpty){
          break;
        }
        trimmedString = trimmedString.toLowerCase().startsWith("m") ? "male" : "female";
      }
      else if(entry.key == Tb.user_info.birth_date)
      {
        if(trimmedString.isEmpty){
          continue;
        }
        final format = DateFormat("d/M/y");
        var dateTime = format.parse(trimmedString);
        userJsonObject[entry.key] = dateTime;
        continue;
      }
      userJsonObject[entry.key] = trimmedString;
      continue;
    }
    if(!userJsonObject.keys.toSet().containsAll([
      Tb.user_info.email_readonly,
      Tb.user_info.sex,
      Tb.user_info.name,
      Tb.user_info.surname,
    ]))
    {
      continue;
    }
    if(userList.any((element) => element[Tb.user_info.email_readonly]==userJsonObject[Tb.user_info.email_readonly]))
    {
      //omit with duplicate email
      continue;
    }
    userList.add(userJsonObject);
}
  return userList;
}
}