import 'package:fstapp/dataModels/GameSettingsModel.dart';
import 'package:fstapp/dataModels/ServiceItemModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbOccasions {
  static final _supabase = Supabase.instance.client;

  static const String serviceNone = "none";
  static const String servicePaid = "paid";
  static const String serviceUsed = "used";
  static const String serviceTypeFood = "food";
  static const String serviceTypeAccommodation = "accommodation";

  static Future<List<ServiceItemModel>> getAllServices(String type) async {
    var data = await _supabase.rpc("get_all_service_items", params: {
      'oc': RightsService.currentOccasion,
      'type': type,
    });
    var items = List<ServiceItemModel>.from(
        data["data"].map((x) => ServiceItemModel.fromJson(x)));
    return items;
  }

  static Future<bool> createService(String type, ServiceItemModel item) async {
    var result = await _supabase.rpc("create_service_item", params: {
      'oc': RightsService.currentOccasion,
      'type': type,
      'code': item.code,
      'title': item.title,
      'reference': item.reference,
    });
    return result["code"] == 200;
  }

  static Future<bool> updateService(String type, ServiceItemModel item) async {
    var result = await _supabase.rpc("update_service_item", params: {
      'oc': RightsService.currentOccasion,
      'type': type,
      'code': item.code,
      'new_title': item.title,
      'new_reference': item.reference,
    });
    return result["code"] == 200;
  }

  static Future<bool> deleteService(String type, ServiceItemModel item, [bool force = false]) async {
    var result = await _supabase.rpc("delete_service_item", params: {
      'oc': RightsService.currentOccasion,
      'code': item.code,
      'type': type,
      'force': force
    });
    return result["code"] == 200;
  }

  static Future<GameSettingsModel?> loadGameSettings() async {
    final response = await _supabase
        .from(Tb.occasions.table)
        .select(Tb.occasions.data)
        .eq(Tb.occasions.id, RightsService.currentOccasion!)
        .maybeSingle();

    if (response != null) {
      final data = response[Tb.occasions.data];
      if (data != null && data[Tb.occasions.data_game] != null) {
        return GameSettingsModel.fromJson(data[Tb.occasions.data_game]);
      }
    }
    return null;
  }

  static Future<bool> updateGameSettings(GameSettingsModel settings) async {
    final response = await _supabase.rpc('game_update_settings', params: {
      'oc': RightsService.currentOccasion,
      'new_start_time': settings.start?.toIso8601String(),
      'new_end_time': settings.end?.toIso8601String(),
    });

    if (response == null) {
      return false;
    }

    return response != null && response['code'] == 200;
  }
}
