import 'package:get_storage/get_storage.dart';

class StorageHelper{
  static final box = GetStorage();
  static String? Get(String key){
    if(box.hasData(key))
    {
      return box.read(key);
    }
    return null;
  }
  static void Set(String key, String value){
    box.write(key, value);
  }
}