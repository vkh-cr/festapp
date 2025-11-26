import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/features/ticket_feature.dart';
import 'package:fstapp/data_models/game_settings_model.dart';
import 'package:fstapp/data_models/image_model.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/service_item_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_images.dart';
import 'package:fstapp/data_services/rights_service.dart';
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
      'oc': RightsService.currentOccasionId(),
      'type': type,
    });
    var items = List<ServiceItemModel>.from(
        data["data"].map((x) => ServiceItemModel.fromJson(x)));
    return items;
  }

  static Future<bool> createService(String type, ServiceItemModel item) async {
    var result = await _supabase.rpc("create_service_item", params: {
      'oc': RightsService.currentOccasionId(),
      'type': type,
      'code': item.code,
      'title': item.title,
      'reference': item.reference,
    });
    return result["code"] == 200;
  }

  static Future<bool> updateService(String type, ServiceItemModel item) async {
    var result = await _supabase.rpc("update_service_item", params: {
      'oc': RightsService.currentOccasionId(),
      'type': type,
      'code': item.code,
      'new_title': item.title,
      'new_reference': item.reference,
    });
    return result["code"] == 200;
  }

  static Future<bool> deleteService(String type, ServiceItemModel item, [bool force = false]) async {
    var result = await _supabase.rpc("delete_service_item", params: {
      'oc': RightsService.currentOccasionId(),
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
        .eq(Tb.occasions.id, RightsService.currentOccasionId()!)
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
      'oc': RightsService.currentOccasionId(),
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

  static Future<OccasionModel> getOccasionByLink(String link) async {
    var data = await _supabase.from(Tb.occasions.table).select().eq(Tb.occasions.link, link).single();
    return OccasionModel.fromJson(data);
  }

  static Future<List<OccasionModel>> getAllOccasionsForEdit(int unitId) async {
    var data = await _supabase.rpc("get_all_occasions_for_edit_v212",
        params:
        {
          "unit_id": unitId,
        });
    return List<OccasionModel>.from(data.map((x) => OccasionModel.fromJson(x)));
  }

  static Future<void> updateOccasion(OccasionModel occasionModel) async {
    final Map<String, dynamic> occasionJson = occasionModel.toJson();
    await _supabase.rpc("update_occasion_203",
        params: {
          "input_data": occasionJson,
        });
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
    await _supabase.rpc('delete_occasion', params: {'oc': oc});

    final data = await _supabase
        .from(Tb.images.table)
        .select()
        .isFilter(Tb.images.occasion, null)
        .isFilter(Tb.images.unit, null);
    final orphanImages = List<ImageModel>.from(data.map((x) => ImageModel.fromJson(x)));

    for (var img in orphanImages) {
      await DbImages.removeImage(img.link!);
    }

    await _supabase
        .from(Tb.images.table)
        .delete()
        .isFilter(Tb.images.occasion, null)
        .isFilter(Tb.images.unit, null);
  }

}
