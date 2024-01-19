import 'dart:convert';
import 'package:avapp/services/StorageHelper.dart';

class LocalDataHelper
{
  static const String myProgramStorage = "myProgramStorage";

  static void saveMyProgramData(List<int> offlineData) {
    var encoded = jsonEncode(offlineData);
    StorageHelper.Set(myProgramStorage, encoded);
  }

  static List<int> getMyProgramData() {
    var eventData = StorageHelper.Get(myProgramStorage);
    if(eventData==null)
    {
      return <int>[];
    }
    List<dynamic> offlineData = json.decode(eventData);
    return List<int>.from(
        offlineData.map((x) => x));
  }

  static void addToMyProgram(int id) {
    var offlineData = getMyProgramData();
    offlineData.add(id);
    saveMyProgramData(offlineData);
  }

  static void addAllToMyProgram(List<int> ids) {
    var offlineData = getMyProgramData();
    offlineData.addAll(ids);
    saveMyProgramData(offlineData);
  }

  static void removeFromMyProgram(int id) {
    var offlineData = getMyProgramData();
    offlineData.remove(id);
    saveMyProgramData(offlineData);
  }

  static bool isEventSaved(int id) {
    var offlineData = getMyProgramData();
    return offlineData.contains(id);
  }

  static List<int> getAllMyProgram() {
    return getMyProgramData();
  }

}