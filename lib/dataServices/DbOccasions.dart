import 'package:fstapp/components/features/feature.dart';
import 'package:fstapp/dataModels/GameSettingsModel.dart';
import 'package:fstapp/dataModels/ImageModel.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/ServiceItemModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbImages.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
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
      'oc': RightsService.currentOccasionId,
      'type': type,
    });
    var items = List<ServiceItemModel>.from(
        data["data"].map((x) => ServiceItemModel.fromJson(x)));
    return items;
  }

  static Future<bool> createService(String type, ServiceItemModel item) async {
    var result = await _supabase.rpc("create_service_item", params: {
      'oc': RightsService.currentOccasionId,
      'type': type,
      'code': item.code,
      'title': item.title,
      'reference': item.reference,
    });
    return result["code"] == 200;
  }

  static Future<bool> updateService(String type, ServiceItemModel item) async {
    var result = await _supabase.rpc("update_service_item", params: {
      'oc': RightsService.currentOccasionId,
      'type': type,
      'code': item.code,
      'new_title': item.title,
      'new_reference': item.reference,
    });
    return result["code"] == 200;
  }

  static Future<bool> deleteService(String type, ServiceItemModel item, [bool force = false]) async {
    var result = await _supabase.rpc("delete_service_item", params: {
      'oc': RightsService.currentOccasionId,
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
        .eq(Tb.occasions.id, RightsService.currentOccasionId!)
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
      'oc': RightsService.currentOccasionId,
      'new_start_time': settings.start?.toIso8601String(),
      'new_end_time': settings.end?.toIso8601String(),
    });

    if (response == null) {
      return false;
    }

    return response != null && response['code'] == 200;
  }

  static Future<OccasionModel> getOccasion(int oc) async {
    var data = await _supabase.from(Tb.occasions.table).select().eq(Tb.occasions.id, oc).single();
    return OccasionModel.fromJson(data);
  }

  static Future<List<OccasionModel>> getAllOccasionsForEdit(int unitId) async {
    var data = await _supabase.rpc("get_all_occasions_for_edit",
        params:
        {
          "unit_id": unitId,
        });
    return List<OccasionModel>.from(data["data"].map((x) => OccasionModel.fromJson(x)));
  }

  static Future<List<OccasionModel>> getAllOccasions(int unit) async {
    var data = await _supabase.from(Tb.occasions.table).select().eq(Tb.occasions.unit, unit);
    var toReturn = List<OccasionModel>.from(data.map((x) => OccasionModel.fromJson(x)));
    return toReturn;
  }

  static Future<void> updateOccasion(OccasionModel occasionModel) async {
    var data = await _supabase.rpc("update_occasion",
        params:
        {
          "input_data": occasionModel,
        });
    if(data["code"] != 200){
      throw Exception(data["message"]);
    }
  }

  static Future<void> duplicateOccasion(int oc, int? unit) async {

    var ocId = await _supabase.rpc("duplicate_occasion",
        params:
        {
          "oc": oc,
        });

    var occasion = await getOccasion(ocId);

    var ticketDetails = FeatureService.getFeatureDetails(FeatureConstants.ticket, features: occasion.features);
    if (ticketDetails is TicketFeature && ticketDetails.ticketBackground != null && ticketDetails.ticketBackground!.isNotEmpty) {
      var cpy = await DbImages.createCopyOfImage(ticketDetails.ticketBackground!, ocId, unit);
      ticketDetails.ticketBackground = cpy;
    }


    var ocImage = occasion.data?["image"];
    if(ocImage != null)
    {
      var cpy = await DbImages.createCopyOfImage(ocImage, ocId, unit);
      occasion.data!["image"] = cpy;
    }

    await updateOccasion(occasion);
  }

  static Future<void> deleteOccasion(int oc) async {
    var data = await _supabase.from(Tb.images.table).select().eq(Tb.images.occasion, oc);
    var occasionImages = List<ImageModel>.from(data.map((x) => ImageModel.fromJson(x)));
    for(var oc in occasionImages){
      await DbImages.removeImage(oc.link!);
    }
    await _supabase.from(Tb.images.table).delete().eq(Tb.images.occasion, oc);
    await _supabase.rpc("delete_occasion", params: {"oc": oc});
  }

  static Future<List<OccasionModel>> getAllOccasionsForUnit(int unitId) async {
    var data = await _supabase.rpc("get_all_occasions",
        params:
        {
          "unit_id": unitId,
        });
    return List<OccasionModel>.from(data["data"].map((x) => OccasionModel.fromJson(x)));
  }
}
